import { describe, expect, it } from "vitest";
import { getEvent } from "@/lib/events";

describe("events", () => {
  it("has the first aid & CPR training named Code Blue", () => {
    expect(getEvent("code-blue")?.name).toBe("Code Blue");
  });

  it("lists MedSide Company as the Code Blue partner", () => {
    expect(getEvent("code-blue")?.partner?.name).toBe("MedSide Company");
  });

  it("has three Code Blue instructors and eleven training topics", () => {
    const e = getEvent("code-blue");
    expect(e?.instructors).toHaveLength(3);
    expect(e?.topics).toHaveLength(11);
  });

  it("has the medical tests day named Beyond the Sample", () => {
    expect(getEvent("beyond-the-sample")?.name).toBe("Beyond the Sample");
  });
});
