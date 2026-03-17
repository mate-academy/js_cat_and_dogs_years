'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return [0, 0] for ages less than 15', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for ages benween 15 and 23', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [1, 1] for ages benween 15 and 23', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for ages more then 24 or exactly 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should calculate extra years correctly', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should work for large numbers', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
