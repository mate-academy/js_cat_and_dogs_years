/* eslint-disable max-len */
/* eslint quotes: "off" */
"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return array with zero values if arguments are zero", () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test("should return array with zero values if cat and dog years are less then 15", () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test("should return array with values 1 if cat and dog years are equal 15", () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test("should return array with value 1 if arguments are greater than 15 and less than 24", () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test("should return array with values 2 if arguments are equal 24", () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test("should return array with values 2 if arguments are greater than 24 and less than 29", () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test("should return array with values [3, 2] if arguments are equal 28", () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test("should return array with values [21, 17] if arguments are equal 100", () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
