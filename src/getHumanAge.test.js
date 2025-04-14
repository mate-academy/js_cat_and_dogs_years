"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return correct values for valid inputs", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(23, 24)).toEqual([1, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test("should have expected values with rounds", () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
    expect(getHumanAge(16, 24)).toEqual([1, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test("should handle invalid and edge inputs", () => {
    expect(getHumanAge(-5, -10)).toEqual([0, 0]);
    expect(getHumanAge(14.5, 14.7)).toEqual([0, 0]);
    expect(Number.isNaN(getHumanAge(NaN, 14)[0])).toBe(true);
    expect(Number.isNaN(getHumanAge(14, NaN)[1])).toBe(true);
    expect(getHumanAge(NaN, undefined)).toEqual([NaN, NaN]);
  });

  test("should correctly handle invalid types", () => {
    expect(getHumanAge("15", 15)).toEqual([1, 1]);
    expect(getHumanAge(15, {})).toEqual([1, NaN]);
    expect(getHumanAge([], null)).toEqual([0, 0]);
  });
});
