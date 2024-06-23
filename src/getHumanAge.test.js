/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should convert cat and dog years to human years correctly for typical cases', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });

  test('should return 0 for both cat and dog when their age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 1 for both cat and dog when their age is exactly 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return an array with two elements for any valid input', () => {
    const result = getHumanAge(20, 20);

    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(2);
  });
});
