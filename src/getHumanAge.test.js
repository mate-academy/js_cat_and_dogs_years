'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('Function should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('The result length should be 2', () => {
    expect(getHumanAge())
      .toHaveLength(2);
  });

  test('Cat and dogs year should be 0 for less than 15 years', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('Cat and dogs year should be 1 for 15 years', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('Cat years should be greater than dog years for 28 years', () => {
    const result = getHumanAge(28, 28);

    expect(result[0])
      .toBeGreaterThan(result[1]);
  });

  test('Cat years should be 21 and dogs years should be 17 for 100 years', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
