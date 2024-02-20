import { describe, expect, test } from "vitest";
import { calculateTotalAverage } from "./calculateTotalAverage";

describe("Given calculateTotalAverage function", () => {
  test("When good is higher than bad value Then expected positive number should be returned", () => {
    const EXPECTED_VALUE = "0.75";

    const good = 10;
    const bad = 1;
    const totalFeedback = 12;

    const totalAverage = calculateTotalAverage({ good, bad, totalFeedback });

    expect(totalAverage).toBe(EXPECTED_VALUE);
  });

  test("When good is lower than bad value Then expected negative number should be returned", () => {
    const EXPECTED_VALUE = "-0.20";

    const good = 1;
    const bad = 2;
    const totalFeedback = 5;

    const totalAverage = calculateTotalAverage({ good, bad, totalFeedback });

    expect(totalAverage).toBe(EXPECTED_VALUE);
  });

  test("When good is equal than bad value Then 0 should be returned", () => {
    const EXPECTED_VALUE = "0";

    const good = 1;
    const bad = 1;
    const totalFeedback = 5;

    const totalAverage = calculateTotalAverage({ good, bad, totalFeedback });

    expect(totalAverage).toBe(EXPECTED_VALUE);
  });

  test("When good value is not defined Then 0 should be returned", () => {
    const EXPECTED_VALUE = "0";

    const good = undefined;
    const bad = 1;
    const totalFeedback = 5;

    const totalAverage = calculateTotalAverage({ good, bad, totalFeedback });

    expect(totalAverage).toBe(EXPECTED_VALUE);
  });

  test("When bad value is not defined Then 0 should be returned", () => {
    const EXPECTED_VALUE = "0";

    const good = 1;
    const bad = undefined;
    const totalFeedback = 5;

    const totalAverage = calculateTotalAverage({ good, bad, totalFeedback });

    expect(totalAverage).toBe(EXPECTED_VALUE);
  });

  test("When totalFeedback value is not defined Then 0 should be returned", () => {
    const EXPECTED_VALUE = "0";

    const good = 1;
    const bad = 1;
    const totalFeedback = undefined;

    const totalAverage = calculateTotalAverage({ good, bad, totalFeedback });

    expect(totalAverage).toBe(EXPECTED_VALUE);
  });
});
