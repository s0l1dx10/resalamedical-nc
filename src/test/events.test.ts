import { describe, expect, it } from "vitest";
import { getEvent } from "@/lib/events";

describe("events", () => {
  it("has the dental day named Code Blue", () => {
    expect(getEvent("code-blue")?.name).toBe("Code Blue");
  });

  it("has the medical tests day named Beyond the Sample", () => {
    expect(getEvent("beyond-the-sample")?.name).toBe("Beyond the Sample");
  });
});
