"use strict";

describe("getHumanAge", () => {
  const { getHumanAge, convertToHuman } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge.name).toBe("getHumanAge");
    expect(convertToHuman.name).toBe("convertToHuman");
  });

  test("should return [0,0] if catAge === 10 and dogAge === 10", () => {
    let result = getHumanAge(10, 10);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
  });

  test("should return [21,17] if catAge === 100 and dogAge === 100", () => {
    let result = getHumanAge(100, 100);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([21, 17]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
  });

  test("should return [0,0] if catAge === 0 and dogAge === 0", () => {
    let result = getHumanAge(0, 0);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
  });

  test("should return [0,0] if catAge === 14 and dogAge === 14", () => {
    let result = getHumanAge(14, 14);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([0, 0]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
  });

  test("should return [1,1] if catAge === 15 and dogAge === 15", () => {
    let result = getHumanAge(15, 15);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([1, 1]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
  });

  test("should return [1,1] if catAge === 23 and dogAge === 23", () => {
    let result = getHumanAge(23, 23);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([1, 1]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
  });

  test("should return [2,2] if catAge === 24 and dogAge === 24", () => {
    let result = getHumanAge(24, 24);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([2, 2]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
  });

  test("should return [2,2] if catAge === 27 and dogAge === 27", () => {
    let result = getHumanAge(27, 27);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([2, 2]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
  });

  test("should return [3,2] if catAge === 28 and dogAge === 28", () => {
    let result = getHumanAge(28, 28);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([3, 2]);
    result.forEach((part) => {
      expect(Number.isInteger(part)).toBe(true);
    });
  });

    test("should return [3,3] if catAge === 29 and dogAge === 29", () => {
      let result = getHumanAge(29, 29);
      expect(result).toBeInstanceOf(Array);
      expect(result).toEqual([3, 3]);
      result.forEach((part) => {
        expect(Number.isInteger(part)).toBe(true);
      });
    });

    test("should return [3,3] if catAge === 30 and dogAge === 30", () => {
      let result = getHumanAge(30, 30);
      expect(result).toBeInstanceOf(Array);
      expect(result).toEqual([3, 3]);
      result.forEach((part) => {
        expect(Number.isInteger(part)).toBe(true);
      });
    });
});
