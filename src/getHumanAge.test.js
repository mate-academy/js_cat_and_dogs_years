/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should not works with negative numbers', () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });

  test('should not works with "string" values', () => {
    expect(getHumanAge(28, 'string')).toEqual([3, NaN]);
  });

  test('should return [0, 0] for catAge and dogAge less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 0] for catAge between 15 and 24 and dogAge less than 15', () => {
    expect(getHumanAge(20, 14)).toEqual([1, 0]);
  });

  test('should return [1, 1] for catAge and dogAge between 15 and 24', () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  test('should return [2, 2] for catAge and dogAge between 24 and 28', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('should return [3, 2] for catAge between 28 and 32 and dogAge less than 29', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [4, 4] for catAge and dogAge between 33 and 42', () => {
    expect(getHumanAge(34, 34)).toEqual([4, 4]);
  });

  test('should return correct human ages for given large catAge and dogAge', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
