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

  test('should return [2, 2] for (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [3, 2] for (28, 28)', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return [5, 4] for (36, 36)', () => {
    expect(getHumanAge(36, 36))
      .toEqual([5, 4]);
  });

  test('should return [20, 19] for (96, 96)', () => {
    expect(getHumanAge(96, 96))
      .toEqual([20, 16]);
  });
});
