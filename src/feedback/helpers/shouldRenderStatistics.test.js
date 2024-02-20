import { describe, expect, test } from "vitest";
import { shouldRenderStatistics } from "./shouldRenderStatistics";

describe("Given shouldRenderStatistics", () => {
  test("When totalFeedback is not defined Then false should be returned", () => {
    const isRendered = shouldRenderStatistics();
    expect(isRendered).toBe(false);
  });

  test("When totalFeedback is equal to 0 Then false should be returned", () => {
    const isRendered = shouldRenderStatistics({ totalFeedback: 0 });
    expect(isRendered).toBe(false);
  });

  test("When totalFeedback is higher than 0 Then true should be returned", () => {
    const isRendered = shouldRenderStatistics({ totalFeedback: 1 });
    expect(isRendered).toBe(true);
  });
});
