'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return [0, 0] for catAge = -1 and dogAge = -1', () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });

  test('should return [0, 0] for catAge = 0 and dogAge = 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge = 17 and dogAge = 17', () => {
    expect(getHumanAge(17, 17)).toEqual([1, 1]);
  });

  test('should return [3, 3] for catAge = 30 and dogAge = 30', () => {
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });

  test('should return [6, 5] for catAge = 40 and dogAge = 40', () => {
    expect(getHumanAge(40, 40)).toEqual([6, 5]);
  });

  test('should return [11, 9] for catAge = 60 and dogAge = 60', () => {
    expect(getHumanAge(60, 60)).toEqual([11, 9]);
  });

  test('should return [21, 17] for catAge = 100 and dogAge = 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
