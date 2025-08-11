"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  const testCases = [
    {
      catAge: 0,
      dogAge: 0,
      expected: [0, 0],
    },
    {
      catAge: 14,
      dogAge: 14,
      expected: [0, 0],
    },
    {
      catAge: 15,
      dogAge: 15,
      expected: [1, 1],
    },
    {
      catAge: 23,
      dogAge: 23,
      expected: [1, 1],
    },
    {
      catAge: 24,
      dogAge: 24,
      expected: [2, 2],
    },
    {
      catAge: 27,
      dogAge: 27,
      expected: [2, 2],
    },
    {
      catAge: 28,
      dogAge: 28,
      expected: [3, 2],
    },
    {
      catAge: 100,
      dogAge: 100,
      expected: [21, 17],
    },
  ];

  testCases.forEach((item) => {
    test(`Of these values: (${item.catAge}, ${item.dogAge}),
      expected:${item.expected}`, () => {
      const res = getHumanAge(item.catAge, item.dogAge);

      expect(res).toEqual(item.expected);
    });
  });
});
