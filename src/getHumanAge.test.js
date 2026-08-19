'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for zero ages', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for ages below first threshold', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] at first threshold', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] at upper bound before second threshold', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] at second threshold', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] before next cat threshold', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] at cat next threshold', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [3, 3] at dog next threshold', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should calculate large ages correctly', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
