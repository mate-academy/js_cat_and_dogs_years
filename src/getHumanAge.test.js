"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return array", () => {
    const result = getHumanAge(0, 0);

    expect(result).toBeInstanceOf(Array);
  });
  test("should return right array length", () => {
    const result = getHumanAge(1, 1);

    expect(result).toHaveLength(2);
  });
  test("should return right result", () => {
    const result = getHumanAge(1, 1);

    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
