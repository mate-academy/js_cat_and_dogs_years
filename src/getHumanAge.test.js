'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared as a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for values less than 15', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(9, 10)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for values between 15 and 23 (inclusive)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(20, 21)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for values between 24 and 27 (inclusive)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(25, 26)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should add 1 human year for every 4 cat years after 24', () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
    expect(getHumanAge(100, 0)).toEqual([21, 0]);
  });

  test('should add 1 human year for every 5 dog years after 24', () => {
    expect(getHumanAge(0, 29)).toEqual([0, 3]);
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
    expect(getHumanAge(0, 100)).toEqual([0, 17]);
  });

  test('should handle edge cases around transition points', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return 0 for negative inputs', () => {
    expect(getHumanAge(-10, -10)).toEqual([0, 0]);
  });
});
