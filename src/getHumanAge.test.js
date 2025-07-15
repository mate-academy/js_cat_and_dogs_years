"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return [0, 0] when catAge and dogAge are [0, 0]", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test("should return [0, 0] when catAge and dogAge are [1, 1]", () => {
    expect(getHumanAge(14, 14)).toContain(0, 0);
  });

  test("should return [1, 1] when catAge and dogAge are [15, 15]", () => {
    expect(getHumanAge(15, 15)).toContain(1, 1);
  });

  test("should return [1, 1] when catAge and dogAge are [23, 23]", () => {
    expect(getHumanAge(23, 23)).toContain(1, 1);
  });

  test("should return [2, 2] when catAge and dogAge are [24, 24]", () => {
    expect(getHumanAge(24, 24)).toContain(2, 2);
  });

  test("should return [2, 2] when catAge and dogAge are [27, 27]", () => {
    expect(getHumanAge(27, 27)).toContain(2, 2);
  });

  test("should return [3, 2] when catAge and dogAge are [28, 28]", () => {
    expect(getHumanAge(28, 28)).toContain(3, 2);
  });

  test("should return [21, 17] when catAge and dogAge are [100, 100]", () => {
    expect(getHumanAge(100, 100)).toContain(21, 17);
  });
});
