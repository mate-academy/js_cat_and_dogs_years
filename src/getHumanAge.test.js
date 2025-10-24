'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('result should be array of two numbers.', () => {
    expect(getHumanAge(1, 1)).toHaveLength(2);
  });

  test('should work with 0 values', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should calculate correct values for 14, 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should calculate correct values for 15, 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should calculate correct values for 23, 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should calculate correct values for 24, 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should calculate correct values for 27, 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should calculate correct values for 28, 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should calculate correct values for 100, 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
