'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    const result = getHumanAge(1, 5);

    expect(result)
      .toBeInstanceOf(Array);
  });

  test('should convert cats age and dogs age to humans age', () => {
    const result = getHumanAge(15, 30);

    expect(result).toEqual([1, 3]);
  });

  test('should return 0 if animal age is 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return 0 if animal age is less then 15 years', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return 1 if animal age equal then 15 years', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test(`should return 1 if animal age is greater 
      then 15 and less then 24 years`, () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test('should return 2 if animal age is equal to 24 years', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test(`should return 2 if animal age is greater 
        then 24 and less then 28 years`, () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test(`should return 3 for cats and 2 for age 
        whose age is equal to 28 years`, () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test(`should return 3 animal whose age is equal to 29 years`, () => {
    const result = getHumanAge(29, 29);

    expect(result).toEqual([3, 3]);
  });

  test(`should add 1 year for cats each 4 years after 28 
        and add 1 year for dog each 5 years after 29`, () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
