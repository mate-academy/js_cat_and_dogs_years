'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('with 0 cat and dog age should return [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('with 14 cat and dog age should return [0, 0]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('with 15 cat and dog age should return [1, 1]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('with 23 cat and dog age should return [1, 1]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('with 24 cat and dog age should return [2, 2]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('with 27 cat and dog age should return [2, 2]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('with 28 cat and 28 dog age should return [3, 2]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('with 100 cat and dog age should return [21, 17]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
