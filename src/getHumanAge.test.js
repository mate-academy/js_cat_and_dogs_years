'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array for zero cat and dog ages', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return the correct human ages for both cat and dog when their ages are within the first year threshold', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return the correct human years when the ages are within the second threshold', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return the correct human years when the ages surpass the second threshold but not yet the third', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return the correct human years when the ages are beyond the second threshold but before the third', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return an array of zero human years if both ages are below the first threshold', () => {
    expect(getHumanAge(5, 5)).toEqual([0, 0]);
  });
});
