'use strict';

/* eslint-disable max-len */

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should correctly calculate human ages for provided examples', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should increase cat human age by 1 for every full 4 years after 24', () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
    expect(getHumanAge(36, 0)).toEqual([5, 0]);
  });

  test('should increase dog human age by 1 for every full 5 years after 24', () => {
    expect(getHumanAge(0, 29)).toEqual([0, 3]);
    expect(getHumanAge(0, 30)).toEqual([0, 3]);
    expect(getHumanAge(0, 35)).toEqual([0, 4]);
  });

  test('should discard remaining years after full cat year blocks', () => {
    expect(getHumanAge(29, 0)).toEqual([3, 0]);
    expect(getHumanAge(31, 0)).toEqual([3, 0]);
  });

  test('should discard remaining years after full dog year blocks', () => {
    expect(getHumanAge(0, 31)).toEqual([0, 3]);
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
  });

  test('should correctly calculate different human ages for cat and dog after 24 years', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(32, 30)).toEqual([4, 3]);
  });

  test('should correctly calculate human ages for large values', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
