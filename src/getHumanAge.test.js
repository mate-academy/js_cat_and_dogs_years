'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should should return [0, 0] when both cat and dog ages are 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] when cat and dog ages are below 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] when cat and dog ages are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] when cat and dog ages are 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] when cat and dog ages are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 2] when cat and dog age is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [0, 1] when cat age is 13 and dog age is 22', () => {
    expect(getHumanAge(13, 22)).toEqual([0, 1]);
  });

  test('should return [3, 0] when cat age is 29 and dog age is 12', () => {
    expect(getHumanAge(29, 12)).toEqual([3, 0]);
  });

  test('should return [3, 1] when cat age is 30 and dog age is 21', () => {
    expect(getHumanAge(30, 21)).toEqual([3, 1]);
  });

  test('should return [2, 0] when cat age is 27 and dog age is 5', () => {
    expect(getHumanAge(27, 5)).toEqual([2, 0]);
  });
});
