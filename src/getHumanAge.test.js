'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should correctly convert cat and dog ages to human ages', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    // 14 cat years => 1 human year, 14 dog years => 1 human year
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    // 15 cat years => 1 human year + 1, 15 dog years => 1 human year + 1
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    // 23 cat years
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    // 24 cat years
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    // 27 cat years
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
    expect(getHumanAge(30, 0)).toEqual([3, 0]);
    expect(getHumanAge(0, 30)).toEqual([0, 3]);
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
    expect(getHumanAge(-10, -10)).toEqual([0, 0]);
    expect(getHumanAge(-10, 10)).toEqual([0, 0]);
    expect(getHumanAge(10, -10)).toEqual([0, 0]);
  });
});
