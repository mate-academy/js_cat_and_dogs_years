"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return zero if years are less than 15", () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test("should return 1 if year is greated or equal to 15 and less than 24", () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test("should return 2 if year is greated or equal to 24 and less than 28", () => {
    expect(getHumanAge(27, 26)).toEqual([2, 2]);
  });

  test("should return correct calculations", () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
