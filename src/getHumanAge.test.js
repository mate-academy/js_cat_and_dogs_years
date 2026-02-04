/* eslint-disable max-len */
/* eslint-disable quotes */
"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should have correct array length ", () => {
    expect(getHumanAge(100, 100)).toHaveLength(2);
  });

  test("should be array with two 0 result if two parameters < 15 ", () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test("should be be array with first zero result if first parameter = 0", () => {
    expect(getHumanAge(0, 16)).toEqual([0, 1]);
  });

  test("should be be array with second zero result if second parameter = 0", () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
  });

  test("should be a correct result if both parameters = 100", () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
