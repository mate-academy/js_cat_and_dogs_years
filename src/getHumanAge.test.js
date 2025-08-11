'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should convert cat and dog age of 0 to human age [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should convert cat and dog age of 14 to human age [0, 0]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should convert cat and dog age of 15 to human age [1, 1]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should convert cat and dog age of 23 to human age [1, 1]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should convert cat and dog age of 24 to human age [2, 2]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should convert cat and dog age of 27 to human age [2, 2]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should convert age of 28 to human age [3, 2]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should convert age of 100 to human age [21, 17]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
