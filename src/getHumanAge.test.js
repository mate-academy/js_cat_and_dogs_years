'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(0, 0))
      .toBeInstanceOf(Array);
  });

  test('should return [0, 0] for inputs (0, 0)', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] for inputs < 15', () => {
    expect(getHumanAge(14, 5))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] for inputs equal 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] for inputs >=15 and < 24', () => {
    expect(getHumanAge(19, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] for inputs equal 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 3 for 28 cat years and 2 for 28 dog years', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 3 for 28 cat years and  29 dog years', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return expected ages', () => {
    expect(getHumanAge(50, 50))
      .toEqual([8, 7]);
  });
});
