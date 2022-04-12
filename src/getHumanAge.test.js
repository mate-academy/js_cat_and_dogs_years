'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return [0, 0] if animalAge is less than 15`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return [1, 1] if animalAge is 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return [1, 1] 
  if animalAge are greater than 15 and less than 24`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return [2, 2] if animalAge is 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return [2, 2] if animalAge is 25`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return [3, 2]
   if catAge is 28 and dogAge is 27`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return [21, 17] if animalAge is 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
