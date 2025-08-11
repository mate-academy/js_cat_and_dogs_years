"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return an array of number", () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test("should return zero if arguments less then 15", () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test("should return same values", () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test("should return different values", () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test("should works with different arguments", () => {
    const result = getHumanAge(100, 99);

    expect(result).toEqual([21, 17]);
  });
});
