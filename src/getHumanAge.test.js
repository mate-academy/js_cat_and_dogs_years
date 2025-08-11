'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] when both catAge and dogAge are 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return [1, 1] when both catAge and dogAge are 15', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('should return [1, 1] when both catAge and dogAge are 20', () => {
    const result = getHumanAge(20, 20);

    expect(result).toEqual([1, 1]);
  });

  test('should return [2, 2] when both catAge and dogAge are 24', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test('should return [3, 2] when catAge is 28 and dogAge is 28', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('should return [21, 17] when both catAge and dogAge are 100', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });

  test('should handle case when catAge is 16 and dogAge is 16', () => {
    const result = getHumanAge(16, 16);

    expect(result).toEqual([1, 1]);
  });
});
