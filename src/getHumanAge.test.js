/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return [0, 0] when both cat and dog ages are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] when cat and dog ages are less than 15 years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] when cat and dog ages are exactly 15 years (first human year)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should still return [1, 1] when cat and dog ages are between 15 and 23 years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] when cat and dog ages reach the second human year threshold (24 years)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] when cat and dog ages do not complete the next full conversion cycle', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should apply different conversion rules for cats and dogs after initial years', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should correctly calculate human age for large cat and dog ages', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should be a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });
});
