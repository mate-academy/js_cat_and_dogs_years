'use strict';

describe(`getHumanAge`, () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    expect(getHumanAge(1, 5))
      .toBeInstanceOf(Array);
  });

  test(`should return an the array where
- the first element is my cat's age in **human** years
- the second element is my dog's age in **human** years`, () => {
    expect(getHumanAge(5, 40))
      .toEqual([0, 5]);
  });

  test(`should return [0, 0] if the years are (0, 0) `, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return [0, 0] if years < 15  `, () => {
    expect(getHumanAge(10, 8))
      .toEqual([0, 0]);
  });

  test(`should return [1, 1] if years from 15 to 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return [2, 2] if years
  for cat from 24 to 27, for dog from 24 to 28`, () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test(`should return [21, 17] if years
  for cat from 100 to 103, for dog from 99 to 103`, () => {
    expect(getHumanAge(103, 103))
      .toEqual([21, 17]);
  });
});
