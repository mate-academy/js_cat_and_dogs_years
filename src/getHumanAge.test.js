/* eslint-disable max-len */
"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should return correct values if both animal ages are less then first argument", () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test("should return correct values if animal ages are higher than animalAge but less than first", () => {
    const result = getHumanAge(16, 17);

    expect(result).toEqual([1, 1]);
  });

  test("should return correct values if passed animal age should be converted in higher than 1", () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test("should return correct values if big animalAge is passed", () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
