'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 years for both cases
    when catsAge and dogsAge are equal to 0 yeras`, () => {
    const years = getHumanAge(0, 0);

    expect(years).toEqual([0, 0]);
  });

  test(`should return 0 years for both cases
  when catsAge and dogsAge are less then 15`, () => {
    const years = getHumanAge(10, 10);

    expect(years).toEqual([0, 0]);
  });

  test(`should return 0 years for both cases
  when catsAge and dogsAge are less then 15`, () => {
    const years = getHumanAge(12, 12);

    expect(years).toEqual([0, 0]);
  });

  test(`should return 1 years for both cases when
  catsAge and dogsAge are bigger or equal then 15 and less then 24`, () => {
    const years = getHumanAge(15, 15);

    expect(years).toEqual([1, 1]);
  });

  test(`should return 2 years for both cases
  when catsAge is bigger or equal then 24 and less then 28
  and dogsAge is bigger or equal then 24 and less then 29`, () => {
    const years = getHumanAge(25, 25);

    expect(years).toEqual([2, 2]);
  });

  test(`should return 3 years for both cases when catsAge
    is bigger or equal then 28 and dogsAge is bigger or equal then 29`, () => {
    const years = getHumanAge(28, 29);

    expect(years).toEqual([3, 3]);
  });

  test(`should return 4 years for both cases when catsAge
    is bigger or equal then 28 and dogsAge is bigger or equal then 29`, () => {
    const years = getHumanAge(35, 35);

    expect(years).toEqual([4, 4]);
  });

  test(`should return 9 years for catsAge and 8 for dogsAge when catsAge
    is bigger or equal then 28 and dogsAge is bigger or equal then 29`, () => {
    const years = getHumanAge(55, 55);

    expect(years).toEqual([9, 8]);
  });

  test(`should return 25 years for both cases when catsAge
    is bigger or equal then 28 and dogsAge is bigger or equal then 29`, () => {
    const years = getHumanAge(118, 142);

    expect(years).toEqual([25, 25]);
  });
});
