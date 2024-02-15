'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros for 0 value', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return zeros for 14 value', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 for each argument with 15 value', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 for each argument with  23 value', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 for each argument with 24 value', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 for each argument with 27 value', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return 3 for a cat and 2 for a dog with 28 value for both',
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });

  test('should return 3 for each argument with 29 value', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test(`should add +1 year every 4 years for a cat 
  and +1 year for every 5 years for a dog`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return NaN for non-added value', () => {
    expect(getHumanAge(29)).toEqual([3, NaN]);
  });
});
