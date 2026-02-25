'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test(`should get correct human ages
    for both cat and dog ages being 0`, () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test(`should get 0 for human ages
    if the cat and dog ages are less than 15`, () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test(`should get correct human ages
    for both cat and dog ages being 15`, () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test(`should get 0 for human ages
    if the cat and dog ages are less than 24`, () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test(`should get correct human ages
    for both cat and dog ages being 24`, () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test(`should get 0 for human ages
    before the first cat age that is every 4th year
    and the first dog age that is every 5th year`, () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test(`should get correct human ages
    for every next 4 years for cats
    and every next 5 years for dogs`, () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test(`should get correct human ages
    for every next 4 years for cats
    and every next 5 years for dogs`, () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
