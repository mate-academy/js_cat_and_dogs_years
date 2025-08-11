'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array [0, 0] if 0 and 0 are entered', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return an array [0, 0] if data < 15', () => {
    expect(getHumanAge(13, 10)).toEqual([0, 0]);
  });

  test('should return an array of [1, 1] if 15 and 15 are entered', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return an array of [1, 1] if 23 and 23 are entered', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return an array [2, 2] if 24 and 24 are entered', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return an array of [2, 2] if 27 and 27 are entered', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return an array of [3, 2] if 28 and 28 are entered', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return an array of [21, 17] if 100 and 100 are entered', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return an array of [1, 1] if 15.5 and 16.1 are entered', () => {
    expect(getHumanAge(15.5, 16.1)).toEqual([1, 1]);
  });

  test('should return an array of [0, 0] if 0.12 and 0.19 are entered', () => {
    expect(getHumanAge(0.12, 0.19)).toEqual([0, 0]);
  });

  test('should return an array of [0, 0] if 15/4 and 19/5 are entered', () => {
    expect(getHumanAge((15 / 4), (19 / 5))).toEqual([0, 0]);
  });
});
