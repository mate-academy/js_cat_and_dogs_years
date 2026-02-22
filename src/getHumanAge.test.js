"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return an array", () => {
    expect(getHumanAge(55, 41)).toBeInstanceOf(Array);
  });

  test(`should be 0 if animal's age less then first
    for (0, 0) should return [0, 0] `, () => {
    const result = getHumanAge(0, 0);
    expect(result).toEqual([0, 0]);
  });

  test("should be 0 if animal's age less then first", () => {
    const result = getHumanAge(14, 14);
    expect(result).toEqual([0, 0]);
  });

  test("should be 1 if animal's age less then sum of first and second", () => {
    const result = getHumanAge(15, 15);
    expect(result).toEqual([1, 1]);
  });

  test("should return [1, 1] for 23, 23 animal's age", () => {
    const result = getHumanAge(23, 23);
    expect(result).toEqual([1, 1]);
  });

  test("should return [2, 2] for 24, 24 animal's age", () => {
    const result = getHumanAge(24, 24);
    expect(result).toEqual([2, 2]);
  });

  test("should return [2, 2] for 27, 27 animal's age", () => {
    const result = getHumanAge(27, 27);
    expect(result).toEqual([2, 2]);
  });

  test("should return [3, 2] for 28, 28 animal's age", () => {
    const result = getHumanAge(28, 28);
    expect(result).toEqual([3, 2]);
  });

  test("should return [21, 17] for 100, 100 animal's age", () => {
    const result = getHumanAge(100, 100);
    expect(result).toEqual([21, 17]);
  });
});
