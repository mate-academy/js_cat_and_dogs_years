'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros if we pass ages less than 15', () => {
    const result = getHumanAge(0, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return [1, 1] if passed animal age >= 15 && age < 24', () => {
    const result = getHumanAge(15, 23);

    expect(result).toEqual([1, 1]);
  });

  test('should return [1, 2] for params (15, 24)', () => {
    const result = getHumanAge(15, 24);

    expect(result).toEqual([1, 2]);
  });

  test('should return [3, 2] for params (28, 28)', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('should return [21, 17] for params (100, 100)', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
