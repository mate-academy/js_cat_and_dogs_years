/* eslint-disable quotes */
"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return [0, 0] for (0, 0)", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test("should return [1, 1] for (15, 15)", () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test("should return [1, 1] for (16, 16)", () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test("should return [2, 2] for (24, 24)", () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test("should return [3, 3] for (28, 29)", () => {
    // 15 + 9 = 24, then each +4 (cat) or +5 (dog) adds 1 human year
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test("should return [4, 3] for (32, 29)", () => {
    // cat: 15+9=24, then +4+4=32 → 2 + (32-24)/4 = 4
    // dog: 15+9=24, then +5=29 → 2 + (29-24)/5 = 3
    expect(getHumanAge(32, 29)).toEqual([4, 3]);
  });

  test("should return [5, 4] for (36, 34)", () => {
    expect(getHumanAge(36, 34)).toEqual([5, 4]);
  });

  test("should return correct human age for edge just before 1 year", () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test("should return correct human age for edge just before 2 years", () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test("should return correct human age with zero cat, old dog", () => {
    expect(getHumanAge(0, 50)).toEqual([0, 7]);
  });

  test("should return correct human age with old cat, zero dog", () => {
    expect(getHumanAge(50, 0)).toEqual([8, 0]);
  });
});
