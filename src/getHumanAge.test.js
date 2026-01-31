"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return [0, 0] for newborn animals", () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test("should return 0 until the animal reaches 15 years", () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test("should return 1 human year at exactly 15 animal years", () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test("still return 1 h year just before the second milestone 24", () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test("should return 2 human years at exactly 24 animal years", () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test("should diverge at year 28 (Cat: 3, Dog: 2)", () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test("should calculate correctly for older animals (100 years)", () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test("should handle cases where ages are different", () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
    expect(getHumanAge(28, 15)).toEqual([3, 1]);
  });
});
