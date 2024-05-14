'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');
  
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] when cat and dog ages are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] when the original age is negative numbers', () => {
    expect(getHumanAge(-2, -3)).toEqual([0, 0]);
  });

  test('should return [0, 0] when cat and dog ages are [14, 14]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] when cat and dog ages are [15, 15]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [0, 1] when cat and dog ages are [14, 15]', () => {
    expect(getHumanAge(14, 15)).toEqual([0, 1]);
  });

  test('should return [1, 1] when cat and dog ages are [23, 23]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] when cat and dog ages are [24, 24]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 1] when cat and dog ages are [24, 23]', () => {
    expect(getHumanAge(24, 23)).toEqual([2, 1]);
  });

  test('should return [2, 2] when cat and dog ages are [27, 27]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 3] when cat and dog ages are [28, 28]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [18, 19] when cat and dog ages are [90, 110]', () => {
    expect(getHumanAge(90, 110)).toEqual([18, 19]);
  });
});

