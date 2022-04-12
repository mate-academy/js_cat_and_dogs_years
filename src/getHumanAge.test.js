'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(1, 31)).toBeInstanceOf(Array);
  });

  test('should return [0, 0] if the years are (0, 0)', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] if the years are (14, 14)', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] if the years are (15, 15)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] if the years are (23, 23)', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] if the years are (24, 24)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] if the years are (27, 27)', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] if the years are (28, 28)', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] if the years are (100, 100)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
