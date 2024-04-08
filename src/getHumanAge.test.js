'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] when catAge and dogAge are both 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] when catAge and dogAge are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] when catAge and dogAge are exactly 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [2, 2] when catAge and dogAge are both 18', () => {
    expect(getHumanAge(18, 18)).toEqual([2, 2]);
  });

  test('should return [2, 2] when catAge and dogAge are both 23', () => {
    expect(getHumanAge(23, 23)).toEqual([2, 2]);
  });

  test('should return [2, 2] when catAge is 24 and dogAge is 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 2] when catAge is 28 and dogAge is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] when catAge is 100 and dogAge is 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
