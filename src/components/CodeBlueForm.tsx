import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { codeBluePackages } from "@/lib/code-blue-packages";
import { registerCodeBlue } from "@/lib/registrations.functions";

export function CodeBlueForm() {
  const submit = useServerFn(registerCodeBlue);
  const [pkg, setPkg] = useState("local");
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");
    try {
      await submit({ data: new FormData(e.currentTarget) });
      setStatus("done");
    } catch (err) {
      let msg = err instanceof Error ? err.message : "حصل خطأ";
      try { const j = JSON.parse(msg); if (Array.isArray(j)) msg = j[0]?.message ?? msg; } catch { /* plain text */ }
      setError(msg);
      setStatus("idle");
    }
  }

  if (status === "done")
    return (
      <div className="rounded-3xl border border-primary/40 bg-card p-10 text-center">
        <div className="text-5xl">✅</div>
        <h3 className="mt-4 text-2xl font-extrabold">تم تسجيلك بنجاح!</h3>
        <p className="mt-2 text-muted-foreground">هنراجع إيصال الدفع ونتواصل معاك على رقمك. نشوفك في Code Blue 🚑</p>
      </div>
    );

  const field = "w-full rounded-xl border border-input bg-background px-4 py-3";
  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-3xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 sm:col-span-2"><span className="text-sm font-bold">الاسم بالكامل</span>
          <input name="full_name" required maxLength={120} className={field} placeholder="الاسم كما تحب يظهر في الشهادة" /></label>
        <label className="space-y-1.5"><span className="text-sm font-bold">الكلية</span>
          <input name="college" required maxLength={150} className={field} placeholder="مثال: طب عين شمس" /></label>
        <label className="space-y-1.5"><span className="text-sm font-bold">رقم الموبايل</span>
          <input name="phone" required type="tel" dir="ltr" inputMode="tel" className={`${field} text-right`} placeholder="01xxxxxxxxx" /></label>
      </div>

      <fieldset>
        <legend className="text-sm font-bold">اختر الشهادة / الباقة</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {codeBluePackages.map((p) => (
            <label key={p.id} className={`cursor-pointer rounded-2xl border-2 p-4 transition-all hover:-translate-y-0.5 ${pkg === p.id ? "border-primary bg-primary/10" : "border-border"}`}>
              <input type="radio" name="package" value={p.id} checked={pkg === p.id} onChange={() => setPkg(p.id)} className="sr-only" />
              <div className="flex items-start justify-between gap-2">
                <span className="font-extrabold">{p.title}</span>
                <span className="shrink-0 text-end">
                  <span className="block text-xl font-extrabold text-primary">{p.price.toLocaleString("ar-EG")} ج</span>
                  {p.oldPrice && <span className="text-xs text-muted-foreground line-through">بدلاً من {p.oldPrice}</span>}
                </span>
              </div>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {p.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block space-y-1.5"><span className="text-sm font-bold">صورة إيصال الدفع</span>
        <input name="receipt" type="file" required accept="image/*,application/pdf"
          onChange={(e) => { const f = e.target.files?.[0]; setPreview(f && f.type.startsWith("image/") ? URL.createObjectURL(f) : null); }}
          className={`${field} file:me-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-1.5 file:font-bold file:text-primary-foreground`} />
        <span className="text-xs text-muted-foreground">صورة أو PDF، بحد أقصى ٥ ميجا</span>
      </label>
      {preview && <img src={preview} alt="معاينة الإيصال" className="max-h-56 rounded-xl border border-border" />}

      {error && <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm font-bold text-destructive">{error}</p>}
      <button disabled={status === "sending"} className="w-full rounded-full bg-cta px-6 py-4 text-lg font-bold text-cta-foreground shadow-cta transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60">
        {status === "sending" ? "جاري الإرسال..." : "سجّل في Code Blue"}
      </button>
    </form>
  );
}
