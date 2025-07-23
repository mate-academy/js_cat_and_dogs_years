'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 when the arguments value equal 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 when the arguments value are negative', () => {
    expect(getHumanAge(-50, -80))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] when the arguments value are (14, 14)', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] when the arguments value are (15, 15)', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] when the arguments value are (23, 23)', () => {
    expect(getHumanAge(23, 23))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] when the arguments value are (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [3, 2] when the arguments value are (28, 28)', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return [21, 17] when the arguments value are (100, 100)', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
