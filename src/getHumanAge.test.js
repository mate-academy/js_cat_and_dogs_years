'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('returns [0, 0] for [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('returns [0, 0] for [14, 14]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('returns [1, 1] for [15, 15]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('returns [1, 1] for [23, 23]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('returns [2, 2] for [24, 24]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns [2, 2] for [27, 27]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('returns [3, 2] for [28, 28]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('returns [21, 17] for [100, 100]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('returns [2, 1] for [26, 23]', () => {
    expect(getHumanAge(26, 23)).toEqual([2, 1]);
  });

  test('returns [6, 5] for [40, 39]', () => {
    expect(getHumanAge(40, 39)).toEqual([6, 5]);
  });

  test('returns [0, 1] for [10, 15]', () => {
    expect(getHumanAge(10, 15)).toEqual([0, 1]);
  });

  test('returns [2, 0] for [24, 10]', () => {
    expect(getHumanAge(24, 10)).toEqual([2, 0]);
  });

  test('returns [7, 6] for [44, 44]', () => {
    expect(getHumanAge(44, 44)).toEqual([7, 6]);
  });
});
