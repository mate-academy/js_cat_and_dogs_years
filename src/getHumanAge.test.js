'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should convert cat and dog ages correctly', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should handle edge cases', () => {
    expect(getHumanAge(0, 100)).toEqual([0, 17]);
    expect(getHumanAge(100, 0)).toEqual([21, 0]);
    expect(getHumanAge(100, 1000)).toEqual([21, 197]);
    expect(getHumanAge(1000, 100)).toEqual([246, 17]);
  });
});
