'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return a correct dog and cats years for an old animals', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });

  test('should return zero for 0 array', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return zero for animals younger 15 years', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return 1 for animals exactly 15 years', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('should return 1 for animals between 15 and 24 years', () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test('should return 2 for animals 24 y.o. ', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test('should return 2 for animals between 24 & 28 and 24 % 25 years', () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test('should return 3 and 2 for cat and dog accordingly', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });
});
