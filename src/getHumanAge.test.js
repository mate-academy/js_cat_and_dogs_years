"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return [0, 0] for zero age", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test("should return [0, 0] for ages less than 15", () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test("should return [1, 1] for ages equal to or greater than 15", () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test("should return [1, 1] for ages less than or equal to 23", () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test("should return [2, 2] for ages 24", () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test("should return [2, 2] for ages up to 27", () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test("should return [3, 2] for cat age 28", () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test("should return [21, 17] for ages 100", () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test(
    "should correctly handle edge cases for cat age greater than 15 " +
      "but less than 24",
    () => {
      expect(getHumanAge(16, 10)).toEqual([1, 0]);
    }
  );

  test(
    "should correctly handle edge cases for dog age greater than 15 " +
      "but less than 24",
    () => {
      expect(getHumanAge(10, 16)).toEqual([0, 1]);
    }
  );
});
