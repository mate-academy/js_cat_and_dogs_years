"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return [0, 0] when both ages are 0", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test("should return [0, 0] when both ages are 14", () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test("should return [1, 1] when both ages are 15", () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test("should return [1, 1] when both ages are 23", () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test("should return [2, 2] when both ages are 24", () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test("should return [2, 2] when both ages are 27", () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test("should return [3, 2] when both ages are 28", () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test("should return [21, 17] for both ages = 100", () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test("should handle different cat and dog ages correctly", () => {
    expect(getHumanAge(30, 40)).toEqual([3, 5]);
    expect(getHumanAge(50, 60)).toEqual([8, 9]);
  });

  test("should handle edge cases below first thresholds", () => {
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
    expect(getHumanAge(14, 10)).toEqual([0, 0]);
  });

  test("should handle ages just at and beyond thresholds", () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });
});
