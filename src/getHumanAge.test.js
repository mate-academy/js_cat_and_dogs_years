'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for zero ages', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return [0, 0] if ages are less than 15', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return [1, 1] for ages equal to 15', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('should return [1, 1] for ages < 24', () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test('should return [2, 2] for ages = 24', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test('should return [2, 2] for ages = 27', () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test('should calculate different ages for cat and dog after 24', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('should return [21, 17] for large ages', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
