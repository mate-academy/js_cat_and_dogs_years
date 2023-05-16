'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('getHumanAge is a function', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test("should return [0, 0] when animals' ages are (0, 0)", () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test("should return [0, 0] when animals' ages are (0, 14)", () => {
    expect(getHumanAge(0, 14))
      .toEqual([0, 0]);
  });

  test("should return [0, 0] when animals' ages are (4, 10)", () => {
    expect(getHumanAge(4, 10))
      .toEqual([0, 0]);
  });

  test("should return [0, 1] when animals' ages are (7, 16)", () => {
    expect(getHumanAge(7, 16))
      .toEqual([0, 1]);
  });

  test("should return [1, 1] when animals' ages are (15, 23)", () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test("should return [1, 1] when animals' ages are (18, 21)", () => {
    expect(getHumanAge(18, 21))
      .toEqual([1, 1]);
  });

  test("should return [2, 0] when animals' ages are (28, 2)", () => {
    expect(getHumanAge(26, 2))
      .toEqual([2, 0]);
  });

  test("should return [1, 2] when animals' ages are (22, 27)", () => {
    expect(getHumanAge(22, 27))
      .toEqual([1, 2]);
  });

  test("should return [2, 2] when animals' ages are (26, 27)", () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test("should return [3, 3] when animals' ages are (28, 29)", () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test("should return [4, 4] when animals' ages are (32, 33)", () => {
    expect(getHumanAge(27, 34))
      .toEqual([3, 4]);
  });

  test("should return [4, 7] when animals' ages are (32, 50)", () => {
    expect(getHumanAge(33, 50))
      .toEqual([4, 7]);
  });
});
