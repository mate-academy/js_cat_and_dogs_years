'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('0 cat/dog years = 0 human year', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('first 15 cat/dog years = 1 human year', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('24 cat/dog years = 2 human year', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('after 24 years, every 4-cat and 5-dog years = 1 human year', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
