'use strict';
/* eslint max-len: "off" */

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('Function should not return empty array', () => {
    expect(getHumanAge(0, 0)).toHaveLength(2);
  });

  test('Function should return an array', () => {
    const result = getHumanAge(0, 0);

    expect(result).toBeInstanceOf(Array);
  });

  test('Should return [0, 0] if both values are negative', () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });

  test('Should return [0, 0] if first value is negative', () => {
    expect(getHumanAge(-1, 0)).toEqual([0, 0]);
  });

  test('Should return [0, 0] if second value is negative', () => {
    expect(getHumanAge(0, -1)).toEqual([0, 0]);
  });

  test('Should return [0, 0] if both values are zero', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return [1, 1] for both values if each value is equal 15 but less than 24', () => {
    expect(getHumanAge(17, 20)).toEqual([1, 1]);
  });

  test('Should return [2, 1] for catAge if value is equal 24 but less than 28', () => {
    expect(getHumanAge(25, 20)).toEqual([2, 1]);
  });

  test('Should return [2, 2] for catAge if value is equal 24 but less than 29', () => {
    expect(getHumanAge(25, 28)).toEqual([2, 2]);
  });

  test('Should return [3, 2] for catAge if value is equal 28 but less than 32', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should return [3, 3] for dogAge if value is equal 29 but less than 34', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('Should return [3, 3] for dogAge if value is equal 29 but less than 34', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
