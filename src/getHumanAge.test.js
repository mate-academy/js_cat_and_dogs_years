'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`Should return 0 for animals' human age,
    if animals' age less than 15`, () => {
    expect(getHumanAge(0, 14)).toEqual([0, 0]);
  });

  test(`Should return 1 for animals' human age,
    if animals' age greater than 14 and less than 24`, () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  test(`Should add 1 cat's human year for every 4 cat's years and
    Should add 1 dog's human year for every 5 dog's years`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
    expect(getHumanAge(59, 59)).toEqual([10, 9]);
    expect(getHumanAge(47, 88)).toEqual([7, 14]);
  });
});
