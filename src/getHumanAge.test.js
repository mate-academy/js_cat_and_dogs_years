'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return [0, 0] for catAge = 0 and dogAge = 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for catAge = 14 and dogAge = 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge = 15 and dogAge = 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for catAge = 16 and dogAge = 16', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('should return [1, 1] for catAge = 23 and dogAge = 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for catAge = 24 and dogAge = 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for catAge = 27 and dogAge = 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [2, 2] for catAge = 28 and dogAge = 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [3, 3] for catAge = 29 and dogAge = 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should return [3, 3] for catAge = 30 and dogAge = 30', () => {
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });

  test('should return [17, 17] for catAge = 100 and dogAge = 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
