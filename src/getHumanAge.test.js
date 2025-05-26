'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge.js');

  test('should return [0,0] when both catAge and dogAge are 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 for ages less than 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] for ages between 15 and 23 (inclusive)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should calculate human age for cat and dog', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should handle large ages correctly', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return correct human ages when cat and dog ages differ', () => {
    expect(getHumanAge(30, 25)).toEqual([3, 2]);
  });
});
