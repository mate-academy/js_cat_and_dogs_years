'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return array', () => {
    expect(getHumanAge())
      .toBeInstanceOf(Array);
  });

  test('should return array with first and second elements', () => {
    expect(getHumanAge(14, 14))
      .toHaveLength(2);
  });

  test('should return 0 if catAge = 0, dogAge = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 if catAge = 0, dogAge = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 if catAge <= 14, dogAge <= 14', () => {
    expect(getHumanAge(14, 10))
      .toEqual([0, 0]);
  });

  test('should return 1 if catAge = 15 and dogAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 if catAge = 23 and dogAge = 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 if catAge = 24 and dogAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 if catAge = 27 and dogAge = 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return catAge = 3, dogAge = 2 if catAge and dogAge = 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 3 if catAge = 28 and dogAge = 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should humanAges if catAge <= 29 and dogAge <= 29', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
