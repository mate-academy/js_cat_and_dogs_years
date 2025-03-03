'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(1, 1))
      .toBeInstanceOf(Array);
  });

  test('should return an array with 2 elements', () => {
    expect(getHumanAge(1, 1))
      .toHaveLength(2);
  });

  test('should return cat year = 0, dog year = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return cat year = 0, dog year = 0', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return cat year = 1, dog year = 1', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return cat year = 1, dog year = 1', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return cat years = 2, dog years = 2', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return cat years = 2, dog years = 2', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return cat years = 3, dog years = 2', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return cat years = 21, dog years = 17', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
