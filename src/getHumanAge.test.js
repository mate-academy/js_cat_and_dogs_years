'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('0 cat/dog years give 0 human years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('14 cat/dog years give 0 human years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('15 cat/dog years give 1 human years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('23 cat/dog years give 1 human years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('24 cat/dog years give 2 human years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('27 cat/dog years give 2 human years', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('28 cat/dog years give 3 human years for cat and 2 for dog', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('29 cat/dog years give 3 human years', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('100 cat/dog years give 21 human years for cat and 17 for dog', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
