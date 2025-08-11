'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 years
    if cat's or dog's age = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return 1 year
    if first 15 cat years give 1 human year`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 0 years
    if cat's or dog's age = 14`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return 2 years
    if cat's or dog's age = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 1 year
    if cat's or dog's age = 23`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return 3 years for cat, 2 years for dog
    if cat's or dog's age = 28`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return 2 years
    if cat's or dog's age = 27`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return 3 years
    if cat's age = 28, dog's one = 29 `, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test(`should return 21 year for cat and 17 for dog
    if cat's or dog's age = 100`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
