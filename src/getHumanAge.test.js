'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for ages 0 and 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should handle ages below the first threshold 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should handle ages are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should handle ages more then 15', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should handle ages are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should handle ages more then 24', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('should handle age are 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should handle age are 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should handle age are 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should handle age more than 29', () => {
    expect(getHumanAge(30, 31)).toEqual([3, 3]);
  });
});
