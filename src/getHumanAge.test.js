'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for (0, 0)', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] for (15, 15)', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] for (16, 16)', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] for (17, 17)', () => {
    expect(getHumanAge(17, 17))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] for (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] for (25, 25)', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] for (27, 27)', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return [3, 2] for (28, 27)', () => {
    expect(getHumanAge(28, 27))
      .toEqual([3, 2]);
  });

  test('should return [3, 3] for (28, 29)', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return [2, 3] for (27, 29)', () => {
    expect(getHumanAge(27, 29))
      .toEqual([2, 3]);
  });

  test('should return [21, 17] for (100, 100)', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
