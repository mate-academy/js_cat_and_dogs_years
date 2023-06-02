'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return [0, 0] for catAge = 0 and dogAge = 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge = 15 and dogAge = 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [3, 3] for catAge = 28 and dogAge = 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return [3, 3] for catAge = 30 and dogAge = 30', () => {
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });

  test('should return [6, 5] for catAge = 40 and dogAge = 40', () => {
    expect(getHumanAge(40, 40)).toEqual([6, 5]);
  });

  test('should return [0, 1] for catAge = 5 and dogAge = 15', () => {
    expect(getHumanAge(5, 15)).toEqual([0, 1]);
  });

  test('should return [3, 0] for catAge = 28 and dogAge = 8', () => {
    expect(getHumanAge(28, 8)).toEqual([3, 0]);
  });

  test('should return [11, 9] for catAge = 60 and dogAge = 60', () => {
    expect(getHumanAge(60, 60)).toEqual([11, 9]);
  });

  test('should return [0, 0] for catAge = -5 and dogAge = -10', () => {
    expect(getHumanAge(-5, -10)).toEqual([0, 0]);
  });
});
