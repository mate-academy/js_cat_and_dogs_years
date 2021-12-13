'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an Array', () => {
    const result = getHumanAge(10, 10);

    expect(result).toBeInstanceOf(Array);
  });

  test('should return zeros if there are zeros in arguments', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return integer numbers', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return with exactly 2 elements', () => {
    const result = getHumanAge(15, 15);

    expect(result.length).toBe(2);
  });

  test('should return 0 if the argument is less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 if argument is equal 15', () => {
    expect(getHumanAge(14, 15)).toEqual([0, 1]);
  });

  test('should return 1 if argument is more than 15 and less than 24', () => {
    expect(getHumanAge(20, 15)).toEqual([1, 1]);
  });

  test('should return 2 if argument is equal 24', () => {
    expect(getHumanAge(24, 20)).toEqual([2, 1]);
  });

  test('should return 2 if catAge is more than 24 and less than 28', () => {
    expect(getHumanAge(26, 15)).toEqual([2, 1]);
  });

  test('should return 3 if catAge is equal 28', () => {
    expect(getHumanAge(28, 15)).toEqual([3, 1]);
  });

  test('should return 3 if catAge is equal 29', () => {
    expect(getHumanAge(29, 15)).toEqual([3, 1]);
  });

  test('should return 2 if dogAge is more than 24 and less than 29', () => {
    expect(getHumanAge(20, 26)).toEqual([1, 2]);
  });

  test('should return 3 if dogAge is equal 29', () => {
    expect(getHumanAge(20, 29)).toEqual([1, 3]);
  });

  test('should return 3 if dogAge is equal 30', () => {
    expect(getHumanAge(26, 30)).toEqual([2, 3]);
  });
});
