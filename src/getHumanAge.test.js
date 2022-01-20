'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(0, 0)).toBeInstanceOf(Array);
  });

  test('should return 0 for 0 input', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 for input less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 for input 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 for input less than 24', () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  test('should return 2 for input 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 for input less than 28', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for input 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return 3 for input: cat - 28, dog - 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return [21, 17] for input 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
