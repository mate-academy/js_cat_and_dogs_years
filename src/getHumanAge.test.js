'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  // **Cat** years are converted to **human** years following the next rules:

  // - First 15 **cat** years give 1 **human** year
  // - the next 9 **cat** years give 1 more **human** year
  // - every 4 next **cat** years give 1 extra **human** year

  // **Dog** years:

  // - First 15 **dog** years give 1 **human** year
  // - the next 9 **dog** years give 1 more **human** year
  // - every 5 next **dog** years give 1 extra **human** year

  test('The first 15 cat and dog years are equivalent to 1 human year', () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test('The next 9 cat and dog years are give 1 more human year', () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test('The next 4 cat and dog years are give 1 extra human year', () => {
    expect(getHumanAge(28, 28))
      .toStrictEqual([3, 2]);
  });

  test('The next 5 cat and dog years are give 1 extra human year', () => {
    expect(getHumanAge(29, 29))
      .toStrictEqual([3, 3]);
  });

  test('The first 14 cat and dog years are equivalent to 1 human year', () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test('The first 0 cat and dog years are equivalent to 0 human year', () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });
});
