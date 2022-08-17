"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  describe("Tests when someone is younger than 15", () => {
    test("should return 0 for Cat when Cat`s age < 15", () => {
      expect(getHumanAge(1, 15)).toEqual([0, 1]);
    });

    test("should return 0 for Dog when Dog`s age < 15", () => {
      expect(getHumanAge(15, 5)).toEqual([1, 0]);
    });

    test("should return 0 when Cat`s and Dog`s age < 15", () => {
      expect(getHumanAge(7, 14)).toEqual([0, 0]);
    });
  });

  describe(`Tests when someone is older than
  15 years and younger than 24`, () => {
    test("should return 1 for Cat when Cat`s age > = 15 and < 24", () => {
      expect(getHumanAge(15, 20)).toEqual([1, 1]);
    });

    test("should return 1 for Dog when Dog`s age > = 15 and < 24", () => {
      expect(getHumanAge(17, 15)).toEqual([1, 1]);
    });

    test(`should return 1 for Cat and Dog when
  Cat's and Dog's age > = 15 and < 24`, () => {
      expect(getHumanAge(15, 23)).toEqual([1, 1]);
    });
  });

  describe(`Tests when someone is older than 24 years`, () => {
    test(`should return [2, 2] when 
  Cat's and Dog's age > = 24 and <= 27 `, () => {
      expect(getHumanAge(24, 27)).toEqual([2, 2]);
    });

    test("should return [3, 2] when Cat`s and Dog`s age = 28 ", () => {
      expect(getHumanAge(24, 27)).toEqual([2, 2]);
    });

    test("should return [21, 17] when Cat`s and Dog`s age = 100 ", () => {
      expect(getHumanAge(100, 100)).toEqual([21, 17]);
    });
  });

  describe(`Tests in exceptional situations`, () => {
    test("should return [0, 0] when Cat`s and Dog`s age < = 0 ", () => {
      expect(getHumanAge(0, -2)).toEqual([0, 0]);
    });

    test("should return [0, NaN] when Cat`s or Dog`s age is not found ", () => {
      expect(getHumanAge(1)).toEqual([0, NaN]);
    });

    test(`should return [NaN, 0] when
     Cat's or Dog's age is not a number`, () => {
      expect(getHumanAge("a", 2)).toEqual([NaN, 0]);
    });
  });
});
