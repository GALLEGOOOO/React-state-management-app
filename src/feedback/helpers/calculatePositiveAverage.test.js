import { describe, expect, test } from "vitest";
import { calculatePositiveAverage } from "./calculatePositiveAverage";

describe("Given calculatePositiveAverage", () => {
  test("When values are provided Then expected percentage string should be returned", () => {
    const EXPECTED_PERCENTAGE_STRING = "50.00%";

    const good = 5;
    const totalFeedback = 10;

    const positiveAverage = calculatePositiveAverage({ good, totalFeedback });

    expect(positiveAverage).toBe(EXPECTED_PERCENTAGE_STRING);
  });

  test("When good value is not provided Then expected percentage string should be returned", () => {
    const EXPECTED_PERCENTAGE_STRING = "0%";

    const good = undefined;
    const totalFeedback = 10;

    const positiveAverage = calculatePositiveAverage({ good, totalFeedback });

    expect(positiveAverage).toBe(EXPECTED_PERCENTAGE_STRING);
  });

  test("When totalFeedback value is not provided Then expected percentage string should be returned", () => {
    const EXPECTED_PERCENTAGE_STRING = "0%";

    const good = 5;
    const totalFeedback = undefined;

    const positiveAverage = calculatePositiveAverage({ good, totalFeedback });

    expect(positiveAverage).toBe(EXPECTED_PERCENTAGE_STRING);
  });
});
