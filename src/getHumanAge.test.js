'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should convert cat age and dog age to human years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 0 human years for both if age is less than 1', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should convert cat age correctly for 1 year', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test('should convert dog age correctly for 1 year', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('should handle a 2-year-old cat and a 2-year-old dog correctly', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should convert a 3-year-old cat and 3-year-old dog correctly', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should convert a 4-year-old cat and 4-year-old dog correctly', () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  test('should handle large numbers correctly', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
