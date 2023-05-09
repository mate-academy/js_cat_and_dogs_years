'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('getHumanAge is a function', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test("should return [0, 0] when animals' ages are (0, 14)", () => {
    expect(getHumanAge(0, 14))
      .toEqual([0, 0]);
  });

  test("should return [0, 0] when animals' ages are (4, 10)", () => {
    expect(getHumanAge(4, 10))
      .toEqual([0, 0]);
  });

  test("should return [1, 1] when animals' ages are (15, 23)", () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test("should return [1, 1] when animals' ages are (18, 21)", () => {
    expect(getHumanAge(18, 21))
      .toEqual([1, 1]);
  });

  test("should return [2, 7] when animals' ages are (25, 50)", () => {
    expect(getHumanAge(25, 50))
      .toEqual([2, 7]);
  });
});
