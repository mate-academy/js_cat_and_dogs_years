'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] if catAge < 15 and dogAge < 15', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return [0, 0] if catAge = 14 and dogAge = 14', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return [0, 0] if catAge = 14 and dogAge = 14', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return [1, 1] if catAge = 15 and dogAge = 15', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('should return [1, 1] if catAge = 23 and dogAge = 23', () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test('should return [2, 2] if catAge = 24 and dogAge = 24', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test('should return [2, 2] if catAge = 27 and dogAge = 27', () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test('should return [3, 2] if catAge = 28 and dogAge = 28', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('should return [21, 17] if catAge = 100 and dogAge = 100', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
