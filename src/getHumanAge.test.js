"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return array and right result with 0 value", () => {
    const result = getHumanAge(0, 0);

    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0]);
  });
  test("should return right array length", () => {
    const result = getHumanAge(1, 1);

    expect(result).toHaveLength(2);
  });
  test("should return right result", () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
