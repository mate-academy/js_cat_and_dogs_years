'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] when input is (0, 0)', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return an array', () => {
    expect(getHumanAge())
      .toBeInstanceOf(Array);
  });

  test('should return [0, 0] when input is (1, 14)', () => {
    expect(getHumanAge(1, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] when input is (16, 23)', () => {
    expect(getHumanAge(16, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] when input is (24, 25)', () => {
    expect(getHumanAge(24, 25))
      .toEqual([2, 2]);
  });

  test('should return [3, 2] when input is (28, 28)', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });
});
