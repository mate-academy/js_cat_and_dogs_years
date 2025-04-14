/* eslint-disable quotes */
"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("returns [0, 0] for catAge 0 and dogAge 0", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test("returns [1, 1] for catAge 15 and dogAge 15", () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test("returns [2, 2] for catAge 24 and dogAge 24", () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test("calculates human age for cats and dogs correctly", () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test("handles large ages for cats and dogs", () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test("not works with negative numbers", () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });

  test('not works with "string" values', () => {
    expect(getHumanAge(28, "string")).toEqual([3, NaN]);
  });
});
