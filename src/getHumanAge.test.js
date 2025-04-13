'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return array of numbers`, () => {
    expect(Array.isArray(getHumanAge(null, null))).toBeTruthy();
    expect(getHumanAge(null, null)).toHaveLength(2);
    expect(getHumanAge(null, null)).toEqual([0, 0]);
  });

  test('should return 0 humanAge if input value less than 15 years', () => {
    expect(getHumanAge(14, 0)).toHaveLength(2);
    expect(getHumanAge(14, 0)).toEqual([0, 0]);
  });

  test(`should return 1 humanAge
    if input value between 15 and 23 years`, () => {
    expect(getHumanAge(15, 16)).toHaveLength(2);
    expect(getHumanAge(15, 16)).toEqual([1, 1]);
  });

  test(`should test return 2 humanAge
    if input value between 24 and 27 years`, () => {
    expect(getHumanAge(24, 27)).toHaveLength(2);
    expect(getHumanAge(24, 27)).toEqual([2, 2]);
  });

  test(`should return one more humanAge
    for every 4 cat years and 5 dog years after 24`, () => {
    expect(getHumanAge(32, 40)).toHaveLength(2);
    expect(getHumanAge(32, 40)).toEqual([4, 5]);
  });

  test(`should not duplicate human years for each 15/9 years`, () => {
    expect(getHumanAge(100, 100)).toHaveLength(2);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
