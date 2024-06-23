/* eslint-disable no-undef */
/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  test('should return [0, 0] for catAge 0 and dogAge 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for catAge 14 and dogAge 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge 15 and dogAge 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for catAge 23 and dogAge 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for catAge 24 and dogAge 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for catAge 27 and dogAge 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for catAge 28 and dogAge 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for catAge 100 and dogAge 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return [0, 0] for catAge 10 and dogAge 10', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should return [2, 3] for catAge 25 and dogAge 30', () => {
    expect(getHumanAge(25, 30)).toEqual([2, 3]);
  });

  test('should return [5, 4] for catAge 39 and dogAge 34', () => {
    expect(getHumanAge(39, 34)).toEqual([5, 4]);
  });

  test('should return [10, 9] for catAge 60 and dogAge 59', () => {
    expect(getHumanAge(60, 59)).toEqual([10, 9]);
  });

  test('should return [11, 10] for catAge 64 and dogAge 64', () => {
    expect(getHumanAge(64, 64)).toEqual([11, 10]);
  });
});
