'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 years for 0 cat and dogs years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 years for 14 cat and dogs years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 years for 15 cat and dogs years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 years for 23 cat and dogs years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 years for 24 cat and dogs years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 years for 27 cat and dogs years', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return 3 years for 28 cat years and 2 for 28 dog years', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return 21 years for 100 cat 
          years and 17 for 100 dog years`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
