"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should be an array", () => {
    const result = getHumanAge(0, 0);
    expect(result).toBeInstanceOf(Array);
  });

  test("should return zero before 15", () => {
    const result = getHumanAge(13, 1);
    const expectedResult = [0, 0];

    expect(result).toEqual(expectedResult);
  });

  test("should return zero for 0 years", () => {
    const result = getHumanAge(0, 0);
    const expectedResult = [0, 0];

    expect(result).toEqual(expectedResult);
  });

  test("should return valid for 28 human years", () => {
    const result = getHumanAge(28, 28);
    const expectedResult = [3, 2];

    expect(result).toEqual(expectedResult);
  });

  test("should return valid for 100 human years", () => {
    const result = getHumanAge(100, 100);
    const expectedResult = [21, 17];

    expect(result).toEqual(expectedResult);
  })
});
