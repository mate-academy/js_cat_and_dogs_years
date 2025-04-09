'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test(`should return [0, 0]
   if the age of the cat and dog is less than 15`, () => {
    expect(getHumanAge(12, 14)).toEqual([0, 0]);
  });

  test(`should return [0, 0] if the age of the cat and dog is zero`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return [1,1],
  15 years of a cat and a dog is equal to 1 human life`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return [1, 1] when input values are (23, 23)`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return [2, 2] when input values are (24, 26)`, () => {
    expect(getHumanAge(24, 26)).toEqual([2, 2]);
  });

  test(`should return [21, 17] when input values are (100, 100)`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
