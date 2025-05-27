'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for ages below first threshold', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] at first threshold', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [2, 2] at second threshold', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should calculate extra years correctly for cat', () => {
    expect(getHumanAge(28, 15)).toEqual([3, 1]);
    expect(getHumanAge(36, 15)).toEqual([5, 1]);
  });

  test('should calculate extra years correctly for dog', () => {
    expect(getHumanAge(15, 29)).toEqual([1, 3]);
    expect(getHumanAge(15, 39)).toEqual([1, 5]);
  });

  test('should return [8, 9] for high values', () => {
    expect(getHumanAge(50, 60)).toEqual([8, 9]);
  });

  test('should work for mixed values', () => {
    expect(getHumanAge(15, 60)).toEqual([1, 9]);
    expect(getHumanAge(60, 15)).toEqual([11, 1]);
  });

  test('should be return 0 if catAge or dogAge is equal 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be return a right value for first 14 cat & dog age', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be return a right value for first 15 cat & dog age', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be return a right value for first 24 cat & dog age', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should be return a right value for first 28 cat & dog age', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should be return a right value for dogAge & catAge', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
