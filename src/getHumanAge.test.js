/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should not throw an error with incorrect values', () => {
    const humanAge = getHumanAge(-15, 15);

    expect(humanAge).toEqual([0, 1]);
  });

  test('should return [0, 0] if value is less then 15 for both calculations', () => {
    const humanAge = getHumanAge(14, 14);

    expect(humanAge).toEqual([0, 0]);
  });

  test('should return [1, 1] if value is included in the interval of 15-23 for both calculations', () => {
    const humanAge = getHumanAge(23, 23);

    expect(humanAge).toEqual([1, 1]);
  });

  test('should count years with different formulas if value is greater then 24', () => {
    const humanAge = getHumanAge(28, 28);

    expect(humanAge).toEqual([3, 2]);
  });

  test('should work with random values', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(16, 12)).toEqual([1, 0]);
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(73, 61)).toEqual([14, 9]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
