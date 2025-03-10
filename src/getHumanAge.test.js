'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should has correct results when zero ages `, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should has correct results when ages<15 `, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should has correct results when ages=15 `, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should has correct results when 15<ages<24 `, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should has correct results when ages=24 `, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should has correct results when ages=28 `, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should has correct results when ages=100 `, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
