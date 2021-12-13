'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return [0, 0] for 0 cat's and dog's years`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return 0 of human age for cat's and dog's years less than 15`,
    () => {
      expect(getHumanAge(14, 14))
        .toEqual([0, 0]);
    });

  test(`should return 1 of human year for 15 cat's and dog's years`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return 1 human year for cat's and dog's age 
  between 15 and 23 years inclusivly`, () => {
    expect(getHumanAge(23, 16))
      .toEqual([1, 1]);
  });

  test(`should return 2 human years for 24 cat's and dog's years`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return 2 human years for cat's age between 24 and 27
   years inclusivly and dog's age between 24 and 28 years inclusivly`, () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test(`should return 7 human years for  44 cat's 
   years and 0 human years for 0 dog's years`, () => {
    expect(getHumanAge(44, 0))
      .toEqual([7, 0]);
  });

  test(`should return 10 human years for 64 dog's 
   years and 0 human years for 0 cat's years`, () => {
    expect(getHumanAge(0, 64))
      .toEqual([0, 10]);
  });

  test(`should return 21 human years for 100 cat's 
   years and 17 human years for 100 dog's years`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
