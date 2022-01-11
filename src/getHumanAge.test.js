'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(2, 3))
      .toBeInstanceOf(Array);
  });

  test('should return [0, 0], when input 0,0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0], when Cat age < 15, dog age <15',
    () => {
      expect(getHumanAge(10, 8)).toEqual([0, 0]);
    });

  test('should return [0, 0], when Cat age = 14, dog age = 14',
    () => {
      expect(getHumanAge(14, 14)).toEqual([0, 0]);
    });

  test('should return [0, 0], when Cat age = 15, dog age = 15',
    () => {
      expect(getHumanAge(15, 15)).toEqual([1, 1]);
    });

  test('should return [1, 1], when Cat age = 16, dog age = 16',
    () => {
      expect(getHumanAge(16, 16)).toEqual([1, 1]);
    });

  test('should return [1, 1], when Cat age >15 and <23, dog age >15 and <23',
    () => {
      expect(getHumanAge(20, 20)).toEqual([1, 1]);
    });

  test('should return [1, 1], when Cat age = 23, dog age = 23',
    () => {
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

  test('should return [2, 2], when Cat age = 24, dog age = 24',
    () => {
      expect(getHumanAge(24, 24)).toEqual([2, 2]);
    });

  test('should return [2, 2], when Cat age = 26, dog age = 25',
    () => {
      expect(getHumanAge(26, 25)).toEqual([2, 2]);
    });

  test('should return [2, 2], when Cat age = 27, dog age = 27',
    () => {
      expect(getHumanAge(27, 27)).toEqual([2, 2]);
    });

  test('should return [3, 2], when Cat age = 28, dog age = 28',
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });

  test('should return [3, 3], when Cat age = 29, dog age = 29',
    () => {
      expect(getHumanAge(29, 29)).toEqual([3, 3]);
    });

  test('should return [3, 3], when, Cat age = 30, dog age = 33',
    () => {
      expect(getHumanAge(30, 33)).toEqual([3, 3]);
    });

  test('should return [3, 4], when Cat age = 31 and dog age = 34',
    () => {
      expect(getHumanAge(31, 34)).toEqual([3, 4]);
    });

  test('should return [4, 4], when Cat age = 32 and dog age = 35',
    () => {
      expect(getHumanAge(32, 35)).toEqual([4, 4]);
    });

  test('should return [4, 4], when Cat age = 34 and dog age = 37',
    () => {
      expect(getHumanAge(34, 37)).toEqual([4, 4]);
    });

  test('should return [4, 4], when Cat age = 35 and dog age = 38',
    () => {
      expect(getHumanAge(35, 38)).toEqual([4, 4]);
    });

  test('should return [5, 5], when Cat age = 36 and dog age = 39',
    () => {
      expect(getHumanAge(36, 39)).toEqual([5, 5]);
    });

  test('should return [21, 17], when Cat age = 100 and dog age = 100',
    () => {
      expect(getHumanAge(100, 100)).toEqual([21, 17]);
    });

  test('should return [NaN, NaN], when input is string',
    () => {
      expect(getHumanAge('cat', 'dog')).toEqual([NaN, NaN]);
    });

  test('should return [0, 0], when input is negative numbers',
    () => {
      expect(getHumanAge(-1, -5)).toEqual([0, 0]);
    });

  test('should return [0, 0], when input is fractional numbers',
    () => {
      expect(getHumanAge(0.2, 2.8)).toEqual([0, 0]);
    });
});
