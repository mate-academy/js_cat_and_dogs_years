/* eslint-disable quotes */
"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return array of zeros if arguments are zero", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test("should return array of zeros if cat and dog age < 15", () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test("should return count only full year", () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test("should return correct result", () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
