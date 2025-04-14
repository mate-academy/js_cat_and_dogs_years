"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("first 15 cats and dogs years should equal 1 human year", () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test("the next 9 cats and dogs years should equal 1 human year", () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test("every 4 next cats and 5 dogs years should equal 1 human year", () => {
    const result = getHumanAge(28, 29);

    expect(result).toEqual([3, 3]);
  });
});
