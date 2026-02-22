"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return an array", () => {
    expect(getHumanAge(55, 41)).toBeInstanceOf(Array);
  });

  test("should be 0 if animal's age less then first", () => {
    const result = getHumanAge(10, 8);
    expect(result).toEqual([0, 0]);
  });

  test("should be 1 if animal's age less then sum of first and second", () => {
    const result = getHumanAge(20, 20);
    expect(result).toEqual([1, 1]);
  });

  test("should be rounder number", () => {
    const result = getHumanAge(30, 38);
    expect(result).toEqual([3, 4]);
  });
});
