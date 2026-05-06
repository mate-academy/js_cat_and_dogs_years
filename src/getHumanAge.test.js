'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test(`should give 1 **human** year for
    the first 15 **cat** or **dog** years`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should give 1 more **human** year for
    the next 9 **cat** or **dog** years
    after the first 15`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should give 1 **human** year for
    every 4 next **cat** or 5 **dog** years
    after the first 15 + 9 years`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
    expect(getHumanAge(35, 38)).toEqual([4, 4]);
    expect(getHumanAge(36, 39)).toEqual([5, 5]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
