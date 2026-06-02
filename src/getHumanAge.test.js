'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 dog years and 0 cat years for 0 pet years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 dog years and 0 cat years for 14 pet years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 dog year and 1 cat year for 15 pet years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 dog year and 1 cat year for 23 pet years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 dog years and 2 cat years for 24 pet years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 dog years and 2 cat years for 27 pet years', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return 3 dog years and 2 cat years for 28 pet years', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return 21 dog years and 17 cat years for 100 pet years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
