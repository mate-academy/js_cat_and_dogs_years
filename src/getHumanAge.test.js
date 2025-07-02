'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for [14, 14]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for [15, 15]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for [23, 23]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for [24, 24]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for [27, 27]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for [28, 28]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for [100, 100]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should handle edge case where only cat has age', () => {
    expect(getHumanAge(50, 0)).toEqual([8, 0]);
  });

  test('should handle edge case where only dog has age', () => {
    expect(getHumanAge(0, 50)).toEqual([0, 7]);
  });

  test('should handle large values', () => {
    expect(getHumanAge(200, 200)).toEqual([46, 37]);
  });

  test('should handle values just before the threshold', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 14)).toEqual([1, 0]);
    expect(getHumanAge(24, 23)).toEqual([2, 1]);
  });
});
