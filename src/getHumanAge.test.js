'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 when catsAge = 0 and dogsAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return 0 for catsAge < 15 and dogsAge < 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return 1 for (15 <= catsAge < 24) 
  and (15 <= dogsAge < 24)`, () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  test(`should return 2 for (25 <= catsAge < 28) 
  and (25 <= dogsAge < 29)`, () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test(`should return 8 for catsAge = 50 
  and 12 for dogsAge = 75)`, () => {
    expect(getHumanAge(50, 75)).toEqual([8, 12]);
  });
});
