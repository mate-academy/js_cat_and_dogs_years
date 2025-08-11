'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for catAge and dogAge less than 15', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge and dogAge equal to 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for catAge and dogAge less than 24', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for catAge and dogAge equal to 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 3] for catAge 28 and dogAge 30', () => {
    expect(getHumanAge(28, 30)).toEqual([3, 3]);
  });

  test('should discard the remainder when converting to human years', () => {
    expect(getHumanAge(29, 31)).toEqual([3, 3]);
  });
});