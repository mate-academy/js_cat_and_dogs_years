'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should convert cat and dog ages correctly', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 0 for ages less than the first threshould', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should return 1 for ages between the first and second threshould',
    () => {
      expect(getHumanAge(17, 17)).toEqual([1, 1]);
    });

  test('should handle large age values correctly', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should round down correctly for fractional years', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });
});
