'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('0 cat/dog years should return 0 human years', () => {
    const years = getHumanAge(0, 0);

    expect(years).toEqual([0, 0]);
  });

  test('less than 15 cat/dog years should return 0 human years', () => {
    const years = getHumanAge(10, 14);

    expect(years).toEqual([0, 0]);
  });

  test('15 to 23 cat/dog years should return 1 human year', () => {
    const years = getHumanAge(15, 23);

    expect(years).toEqual([1, 1]);
  });

  test('27 cat/dog years should return 2 human years', () => {
    const years = getHumanAge(27, 27);

    expect(years).toEqual([2, 2]);
  });

  test('28 cat/dog years should return 3/2 human years', () => {
    const years = getHumanAge(28, 28);

    expect(years).toEqual([3, 2]);
  });

  test('100 cat/dog years should return 21/17 human years', () => {
    const years = getHumanAge(100, 100);

    expect(years).toEqual([21, 17]);
  });
});
