'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('From 0 to 14 cat or dog years give 1 human year', () => {
    const foo = getHumanAge(0, 14);

    expect(foo)
      .toEqual([0, 0]);
  });

  test('From 15 to 23 cat or dog years give 1 human year', () => {
    const foo = getHumanAge(15, 15);

    expect(foo)
      .toEqual([1, 1]);
  });

  test('From 24 to 27 cat or dog years give 2 human year', () => {
    const foo = getHumanAge(24, 24);

    expect(foo)
      .toEqual([2, 2]);
  });

  test('Every 4 years after 24 dog years give 1 more human year', () => {
    const foo = getHumanAge(28, 28);

    expect(foo)
      .toEqual([3, 2]);
  });

  test('Every 5 years after 24 cat years give 1 more human year', () => {
    const foo = getHumanAge(37, 35);

    expect(foo)
      .toEqual([5, 4]);
  });
});
