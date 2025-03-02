'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return [0, 0] if cat and dog age are 0 or < 0`, () => {
    const result = getHumanAge(0, -4);

    expect(result)
      .toEqual([0, 0]);
  });

  test(`should return [0, 0] if cat and dog age are < 15`, () => {
    const result = getHumanAge(14, 14);

    expect(result)
      .toEqual([0, 0]);
  });

  test(`should return [1, 1] if cat and dog age are >= 15 & < 24`, () => {
    const result = getHumanAge(15, 15);

    expect(result)
      .toEqual([1, 1]);
  });

  test(`should return [1, 1] if cat and dog age are >= 15 & < 24`, () => {
    const result = getHumanAge(23, 23);

    expect(result)
      .toEqual([1, 1]);
  });

  test(`should return [2, 2] if cat age (> 24 & < 28)
  and dog age (> 24 & < 29)`, () => {
    const result = getHumanAge(24, 24);

    expect(result)
      .toEqual([2, 2]);
  });

  test(`should return [2, 3] if cat age (> 24 & < 28)
  and dog age (> 29 & < 34)`, () => {
    const result = getHumanAge(27, 29);

    expect(result)
      .toEqual([2, 3]);
  });

  test(`should return [3, 2] if cat age (> 24 & < 28)
  and dog age (> 29 & < 34)`, () => {
    const result = getHumanAge(28, 28);

    expect(result)
      .toEqual([3, 2]);
  });

  test(`should return [26, 23] if cat age is 120
  and dog age is 130`, () => {
    const result = getHumanAge(120, 130);

    expect(result)
      .toEqual([26, 23]);
  });
});
