'use strict';

// In this task, in the vast majority of tests,
// I used the boundary value technique.
// Perhaps it was necessary to use different approaches,
// but specifically for this task,
// I didn't think of anything.

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array of two elements', () => {
    expect(getHumanAge(1, 2))
      .toHaveLength(2);
  });

  test('should return [0, 0] if parameters in the array are equal [0, 0]',
    () => {
      expect(getHumanAge(0, 0))
        .toEqual([0, 0]);
    });

  // сhecks the boundary value when both values are less than the boundary.
  test('should return [0, 0] if two parameters in the array are less than 15',
    () => {
      expect(getHumanAge(14, 14))
        .toEqual([0, 0]);
    });

  // value exactly on the border.
  test('should return [1, 1] if parameters in the array are equal [15, 15]',
    () => {
      expect(getHumanAge(15, 15))
        .toEqual([1, 1]);
    });

  // between the first and second border values.
  test('should return [1, 1] if parameters in the array are between 15 and 23',
    () => {
      expect(getHumanAge(23, 23))
        .toEqual([1, 1]);
    });

  // value exactly on the border.
  test('should return [2, 2] if parameters in the array are equal [24, 24]',
    () => {
      expect(getHumanAge(24, 24))
        .toEqual([2, 2]);
    });

  // between the second and third border values.
  test('should return [2, 2] if parameters in the array are between 24 and 27',
    () => {
      expect(getHumanAge(27, 27))
        .toEqual([2, 2]);
    });

  // value exactly on the border.
  test('should return [3, 3] if parameters in the array are equal [28, 29]',
    () => {
      expect(getHumanAge(28, 29))
        .toEqual([3, 3]);
    });

  // all, that more the last border value.
  test('should return [21, 17] if parameters in the array are equal [100, 100]',
    () => {
      expect(getHumanAge(100, 100))
        .toEqual([21, 17]);
    });
});
