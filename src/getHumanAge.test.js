'use strict';

/* eslint-disable max-len */

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 when the arguments are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 if the provided arguments are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return an array with correct values when the arguments are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('converted cat years must be greater than dog years when the arguments are 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('when the arguments are big, the cat years must be greater than dog years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
