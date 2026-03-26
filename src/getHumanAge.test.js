'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] if ages are less than 15', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for ages between 15 and 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for 24 years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should correctly calculate additional cat years (4 years step)', () => {
    expect(getHumanAge(28, 24)).toEqual([3, 2]);
  });

  test('should correctly calculate additional dog years (5 years step)', () => {
    expect(getHumanAge(24, 29)).toEqual([2, 3]);
  });

  test('should correctly calculate large ages', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
