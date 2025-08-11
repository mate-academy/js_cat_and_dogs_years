'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array with 2 integers', () => {
    const result = getHumanAge(19, 19);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);

    for (const value of result) {
      expect(Number.isInteger(value)).toBe(true);
    }
  });

  test('should return [0, 0] when both parameters are 0', () => {
    expect(getHumanAge(0, 0)
    ).toEqual([0, 0]);
  });

  test('should ignore decimal part of the input', () => {
    expect(getHumanAge(15.7, 15.9)).toEqual([1, 1]);
  });

  test(' should return [2, 2] for boundary value 24 years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 2] for boundary value 28 years (cat)', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Boundary value for dog 3(29) years', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should handle high numbers', () => {
    expect(getHumanAge(150, 200)).toEqual([33, 37]);
  });

  test('should handle different cat and dog ages', () => {
    expect(getHumanAge(30, 18)).toEqual([3, 1]);
  });
});
