'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 human years for every 0 years of animals', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 1 human year for first 15 years of animals', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 2 human year for first 24 years of animals', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should count third and more human years
    as 4 for cats and 5 for dogs`, () => {
    expect(getHumanAge(40, 39))
      .toEqual([6, 5]);
  });

  test(`should round down human years
    if years of animals does not reach an integer value`, () => {
    expect(getHumanAge(1, 1))
      .toEqual([0, 0]);

    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);

    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);

    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);

    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);

    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);

    expect(getHumanAge(29, 30))
      .toEqual([3, 3]);

    expect(getHumanAge(31, 33))
      .toEqual([3, 3]);

    expect(getHumanAge(102, 100))
      .toEqual([21, 17]);
  });
});
