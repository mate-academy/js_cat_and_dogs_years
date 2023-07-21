"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should return 0 human years for 0 pet years", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test("should return 0 human years for negative pet years", () => {
    expect(getHumanAge(-10, -10)).toEqual([0, 0]);
  });

  test("should return 1 human year for first 15 dog/cat years", () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  /* eslint-disable */
  test("should return 1 human year for 9 dog/cat years after the first 15", () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  /* eslint-disable */
  test("should return 1 human year for each 4 cat years and each 5 dog years after the first 24", () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
