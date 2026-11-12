import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getPackage } from "./code-blue-packages";

const fieldsSchema = z.object({
  full_name: z.string().trim().min(3, "اكتب الاسم بالكامل").max(120),
  college: z.string().trim().min(2, "اكتب الكلية").max(150),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?20)?0?1[0125]\d{8}$/, "رقم موبايل مصري غير صحيح"),
  package: z.enum(["attendance", "basic", "local", "international"]),
});

const MAX = 5 * 1024 * 1024;
const TYPES: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/heic": "heic", "application/pdf": "pdf" };

export const registerCodeBlue = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => {
    if (!(input instanceof FormData)) throw new Error("بيانات غير صالحة");
    const fields = fieldsSchema.parse(Object.fromEntries(["full_name", "college", "phone", "package"].map((k) => [k, input.get(k) ?? ""])));
    const receipt = input.get("receipt");
    if (!(receipt instanceof File) || receipt.size === 0) throw new Error("ارفع صورة إيصال الدفع");
    if (receipt.size > MAX) throw new Error("حجم الإيصال أكبر من ٥ ميجا");
    if (!TYPES[receipt.type]) throw new Error("الإيصال لازم يكون صورة أو PDF");
    return { ...fields, receipt };
  })
  .handler(async ({ data }) => {
    const pkg = getPackage(data.package)!;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const path = `code-blue/${crypto.randomUUID()}.${TYPES[data.receipt.type]}`;
    const up = await supabaseAdmin.storage
      .from("payment-receipts")
      .upload(path, await data.receipt.arrayBuffer(), { contentType: data.receipt.type });
    if (up.error) throw new Error("تعذّر رفع الإيصال، حاول مرة أخرى");
    const { error } = await supabaseAdmin.from("code_blue_registrations").insert({
      full_name: data.full_name,
      college: data.college,
      phone: data.phone,
      package: pkg.title,
      price_egp: pkg.price,
      receipt_path: path,
    });
    if (error) {
      await supabaseAdmin.storage.from("payment-receipts").remove([path]);
      throw new Error("تعذّر حفظ التسجيل، حاول مرة أخرى");
    }
    return { ok: true };
  });
