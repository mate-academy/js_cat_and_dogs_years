'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for 0 cat and dog years', () => {
    expect(getHumanAge(0, 0)).toStrictEqual([0, 0]);
  });

  test('should return [0, 0] for 14 cat and dog years', () => {
    expect(getHumanAge(14, 14)).toStrictEqual([0, 0]);
  });

  test('should return [1, 1] for 15 cat and dog years', () => {
    expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);
  });

  test('should return [1, 1] for 23 cat and dog years', () => {
    expect(getHumanAge(23, 23)).toStrictEqual([1, 1]);
  });

  test('should return [2, 2] for 24 cat and dog years', () => {
    expect(getHumanAge(24, 24)).toStrictEqual([2, 2]);
  });

  test('should return [2, 2] for 27 cat and dog years', () => {
    expect(getHumanAge(27, 27)).toStrictEqual([2, 2]);
  });

  test('should return [3, 2] for 28 cat years and 28 dog years', () => {
    expect(getHumanAge(28, 28)).toStrictEqual([3, 2]);
  });

  test('should return [21, 17] for 100 cat years and 100 dog years', () => {
    expect(getHumanAge(100, 100)).toStrictEqual([21, 17]);
  });
});
