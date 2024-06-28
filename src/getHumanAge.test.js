/* eslint-disable no-undef */
/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return 0 for both cat and dog when their age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 1 for both cat and dog when their age is exactly 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 2 for both cat and dog when their age is exactly 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 3 for both cat and dog when their age is exactly 30', () => {
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });

  test('should return an array with two elements for any valid input', () => {
    const result = getHumanAge(20, 20);

    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(2);
  });
});

test('should handle boundary values around age 15', () => {
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
  expect(getHumanAge(16, 16)).toEqual([1, 1]);
});

test('should handle boundary values around age 24', () => {
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
  expect(getHumanAge(25, 25)).toEqual([2, 2]);
});

test('should handle boundary values around age 30', () => {
  expect(getHumanAge(29, 29)).toEqual([2, 2]);
  expect(getHumanAge(31, 31)).toEqual([3, 3]);
});
