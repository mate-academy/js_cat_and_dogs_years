'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared as a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test(`should return [0, 0]
    if any argument is less than 15`, () => {
    expect(getHumanAge(12, 14)).toEqual([0, 0]);
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 10)).toEqual([0, 0]);
  });

  test(`should return [1, 1] for arguments 15 <= x < 24`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(17, 19)).toEqual([1, 1]);
  });

  test(`should return [2, 2] for arguments 24 <= x < 28`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(26, 25)).toEqual([2, 2]);
  });

  test(`should correctly calculate for specific edge cases`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test(`should return correct values for large arguments`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
    expect(getHumanAge(60, 55)).toEqual([11, 8]);
    expect(getHumanAge(45, 50)).toEqual([7, 7]);
  });

  test('should handle mixed ranges for cat and dog ages', () => {
    expect(getHumanAge(30, 15)).toEqual([3, 1]);
    expect(getHumanAge(15, 30)).toEqual([1, 3]);
    expect(getHumanAge(45, 24)).toEqual([7, 2]);
  });
});
