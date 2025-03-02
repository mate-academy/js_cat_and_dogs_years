'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`0-14 animal's years are equivalent to human's years`, () => {
    expect(getHumanAge(1, 1))
      .toEqual([0, 0]);
  });

  test(`0-14 animal's years are equivalent to human's years`, () => {
    expect(getHumanAge(10, 10))
      .toEqual([0, 0]);
  });

  test(`0-14 animal's years are equivalent to human's years`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`15-23 animal's years give 1 more human year`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`15-23 animal's years give 1 more human year`, () => {
    expect(getHumanAge(20, 20))
      .toEqual([1, 1]);
  });

  test(`15-23 animal's years give 1 more human year`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`24-28 cat's years,
  and 24-29 dog's years
  give 1 extra human year`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`24-28 cat's years,
  and 24-29 dog's years
  give 1 extra human year`, () => {
    expect(getHumanAge(26, 26))
      .toEqual([2, 2]);
  });

  test(`24-28 cat's years,
  and 24-29 dog's years
  give 1 extra human year`, () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test(`28 and more cat's years,
  and 29 and more dog's years
  give 1 extra human year`, () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(`28 and more cat's years,
  and 29 and more dog's years
  give 1 extra human year`, () => {
    expect(getHumanAge(50, 50))
      .toEqual([8, 7]);
  });
});
