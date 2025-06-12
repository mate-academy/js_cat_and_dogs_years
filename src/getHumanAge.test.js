'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  test(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  test(`should return [0, 0] if catAge = 9, dogAge = 9`, () => {
    expect(getHumanAge(9, 9)).toEqual([0, 0]);
  });

  test(`should return [0, 0] if catAge = 0, dogAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return [0, 0] if catAge = 10, dogAge = 10`, () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('cat age 14, dog age 14', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return [1, 1] if catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return [1, 1] if catAge = 16, dogAge = 16`, () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('cat age 23, dog age 23', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test(`should return [2, 2] if catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return [2, 2] if catAge = 25, dogAge = 25`, () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('cat age 27, dog age 28', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test(`should return [3, 3] if catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return [3, 2] for catAge between 28 and 32',
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });

  test('should return [4, 4] for catAge and dogAge between 33 and 42', () => {
    expect(getHumanAge(34, 34)).toEqual([4, 4]);
  });

  test('should return correct human ages for given large catAge and dogAge',
    () => {
      expect(getHumanAge(100, 100)).toEqual([21, 17]);
    });

  test('should not works with negative numbers', () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });

  test('should return [0, 0] if arguments are not provided', () => {
    expect(getHumanAge()).toEqual([0, 0]);
  });

  test('should return [0, 0] if arguments are null', () => {
    expect(getHumanAge(null, null)).toEqual([0, 0]);
  });

  test('should return [0, 0] if arguments are strings', () => {
    expect(getHumanAge('15', '15')).toEqual([0, 0]);
  });

  test('should return correct value when only catAge is passed', () => {
    expect(getHumanAge(30)).toEqual([3, 0]);
  });

  test('should return correct value when only dogAge is passed',
    () => {
      expect(getHumanAge(undefined, 30)).toEqual([0, 3]);
    });

  test('should ignore decimal part and return correct values', () => {
    expect(getHumanAge(28.9, 29.1)).toEqual([3, 3]);
  });

  test('should handle extremely large numbers correctly', () => {
    expect(getHumanAge(1000, 1000)).toEqual([245, 197]);
  });
});
