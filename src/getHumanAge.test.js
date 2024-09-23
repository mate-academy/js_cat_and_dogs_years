/* eslint-disable quotes */
"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return [0, 0] for 0 cat and 0 dog years", () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test("should return [0, 0] for 14 cat and 14 dog years", () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test("should return [1, 1] for 15 cat and 15 dog years", () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test("should return [1, 1] for 23 cat and 23 dog years", () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test("should return [2, 2] for 24 cat and 24 dog years", () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test("should return [2, 2] for 27 cat and 27 dog years", () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test("should return [3, 2] for 28 cat and 28 dog years", () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test("should return [21, 17] for 100 cat and 100 dog years", () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
