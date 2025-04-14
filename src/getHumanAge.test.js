'use strict';

describe('Function getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] when both catAge and dogAge are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return [0, 0] when both catAge
     and dogAge are less than 15`, () => {
    expect(getHumanAge(13, 13)).toEqual([0, 0]);
  });

  test('should return [1, 1] when both catAge and dogAge are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] when both catAge and dogAge are 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] when both catAge and dogAge are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 2] when catAge is 28 and dogAge is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] when both catAge and dogAge are 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return [0, 0] when both catAge and dogAge are negative', () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });
});
