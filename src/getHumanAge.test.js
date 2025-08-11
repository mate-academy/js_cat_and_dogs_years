"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared as a function", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return [0, 0] for ages 0", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test("should return [0, 0] for cat and dog ages less than 15", () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test("should return [1, 1] for cat and dog ages between 15 and 24", () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return [2, 2] for cat age between 24-28
  and dog age between 24-29`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test("should return [3, 2] for cat age over 28 and dog age over 29", () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should add 1 human year for both cat (4 years)
  and dog(5 years) after 24 years`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
