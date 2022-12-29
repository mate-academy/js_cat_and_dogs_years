'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('getHumanAge(0, 0) should return [0, 0]', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('getHumanAge(14, 14) should return [0, 0]', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('getHumanAge(15, 15) should return [1, 1]', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('getHumanAge(16, 16) should return [1, 1]', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('getHumanAge(23, 23) should return [1, 1]', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('getHumanAge(24, 24) should return [2, 2]', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('getHumanAge(25, 25) should return [2, 2]', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('getHumanAge(27, 27) should return [2, 2]', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('getHumanAge(28, 28) should return [3, 2]', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('getHumanAge(29, 29) should return [3, 3]', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test('getHumanAge(100, 100) should return [21, 17]', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
