/* eslint-disable quotes */
"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return [0, 0] if both cat and dog ages are below 15", () => {
    expect(getHumanAge(5, 5)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test("should return [1, 1] when cat and dog age is exactly 15", () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test("should return [1, 1] when cat and dog age is between 15 and 23", () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  test("should return [2, 2] when cat and dog age is exactly 24", () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  // eslint-disable-next-line max-len
  test("should correctly calculate human age for cats and dogs older than 24", () => {
    expect(getHumanAge(28, 30)).toEqual([3, 3]);
    expect(getHumanAge(32, 35)).toEqual([4, 4]);
  });
});
