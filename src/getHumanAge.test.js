"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return [0, 0] when catAge and dogAge are [0, 0]", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test("should return [14, 14] when catAge and dogAge are [1, 1]", () => {
    expect(getHumanAge(14, 14)).toContain(0, 0);
  });

  test("should return [15, 15] when catAge and dogAge are [1, 1]", () => {
    expect(getHumanAge(15, 15)).toContain(1, 1);
  });

  test("should return [23, 23] when catAge and dogAge are [1, 1]", () => {
    expect(getHumanAge(23, 23)).toContain(1, 1);
  });

  test("should return [24, 24] when catAge and dogAge are [2, 2]", () => {
    expect(getHumanAge(24, 24)).toContain(2, 2);
  });

  test("should return [27, 27] when catAge and dogAge are [2, 2]", () => {
    expect(getHumanAge(27, 27)).toContain(2, 2);
  });

  test("should return [28, 28] when catAge and dogAge are [3, 2]", () => {
    expect(getHumanAge(28, 28)).toContain(3, 2);
  });

  test("should return [100, 100] when catAge and dogAge are [21, 17]", () => {
    expect(getHumanAge(100, 100)).toContain(21, 17);
  });
});
