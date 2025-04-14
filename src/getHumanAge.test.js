'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for ages less then 15', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should return [1, 1] for ages between 15 and 23 ', () => {
    expect(getHumanAge(15, 20)).toEqual([1, 1]);
  });

  test('should return [2, 2] for ages of exactly 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should calculate additional years correctly for cats and dogs', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should handle mixed ages correctly', () => {
    expect(getHumanAge(18, 10)).toEqual([1, 0]);
  });

  test('should handle edge cases correctly', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });
});
