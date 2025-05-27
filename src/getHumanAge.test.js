'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be [0, 0] if (0, 0)', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be [0, 0] if (14, 14)', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be [1, 1] if (15, 15)', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be [1, 1] if (23, 23)', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should be [2, 2] if (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should be [2, 2] if (27, 27)', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should be [3, 2] if (28, 28)', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should be [21, 17] if (100, 100)', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
  
});
