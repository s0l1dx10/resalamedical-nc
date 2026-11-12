import { describe, expect, it } from "vitest";
import { getPackage } from "@/lib/code-blue-packages";

describe("Code Blue certificate prices", () => {
  it("attendance only costs 50", () => expect(getPackage("attendance")?.price).toBe(50));
  it("company certificate + card costs 220", () => expect(getPackage("basic")?.price).toBe(220));
  it("local syndicate package costs 350", () => expect(getPackage("local")?.price).toBe(350));
  it("international AACME costs 550", () => expect(getPackage("international")?.price).toBe(550));
});
