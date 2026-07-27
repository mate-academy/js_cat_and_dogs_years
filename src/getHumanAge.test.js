'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return zero on zero value ', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return zero if value < 15 ', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return 1 for the whole first human year range', () => {
    const lowerBound = getHumanAge(15, 15);
    const upperBound = getHumanAge(23, 23);

    expect(lowerBound).toEqual([1, 1]);
    expect(upperBound).toEqual([1, 1]);
  });

  test('should return 2 on the second human year lower bound', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test('should return 2 on the second human year upper bound', () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test('should count cat years faster than dog years after 27', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('should convert big values ', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
