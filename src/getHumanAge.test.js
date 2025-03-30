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
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return 2 for (24 <= catsAge < 28) 
  and (24 <= dogsAge < 29)`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test(`should add 1 extra human year for every 4 next cat years
  and every 5 next dog years for catsAge >= 28 and dogsAge >= 29`, () => {
    expect(getHumanAge(50, 75)).toEqual([8, 12]);
  });
});
