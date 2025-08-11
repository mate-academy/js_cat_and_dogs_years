'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('0 cat years and 0 dog years should result in [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('14 cat years and 14 dog years should result in [0, 0]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('15 cat years and 15 dog years should result in [1, 1]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('23 cat years and 23 dog years should result in [1, 1]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('24 cat years and 24 dog years should result in [2, 2]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('27 cat years and 27 dog years should result in [2, 2]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('28 cat years and 28 dog years should result in [3, 2]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('100 cat years and 100 dog years should result in [21, 17]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
