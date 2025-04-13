'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] when catAge and dogAge less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [3, 2] when catAge and dogAge is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [1, NaN] when only one argument is provided', () => {
    expect(getHumanAge(20)).toEqual([1, NaN]);
  });

  test('should return [0, NaN] when null or undefined is provided', () => {
    expect(getHumanAge(null, undefined)).toEqual([0, NaN]);
  });

  test(`should return [NaN, 2] when first
    argument is string and second is numeric`, () => {
    expect(getHumanAge('cat', 24)).toEqual([NaN, 2]);
  });
});
