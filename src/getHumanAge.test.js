'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should be with expected results', () => {
    expect(getHumanAge(28, 28)).toHaveLength(2);
  });

  test('should return 0 for cat and dog when they are 14 y.o', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 for cat and dog when they are 15 y.o', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 for cat and dog when they are 16 y.o', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('should return 1 for cat and dog when they are 23 y.o', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 for cat and dog when they are 24 y.o', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 for cat and dog when they are 25 y.o', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('should return 2 for cat and dog when they are more than 24 y.o', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('should return 3 for cat and 2 for dog when they are 28 y.o', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return 21 for cat and 17 for dog when they are 100 y.o', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
