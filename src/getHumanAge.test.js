'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for ages below 15', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] at age 15 and age 23', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] at age 24 and age 27', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should convert cat and dog years using different rules', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should convert 100 cat and dog years correctly', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
