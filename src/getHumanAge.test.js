'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for cat and dog if input values equals 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test(`should return 1 for cat and dog 
  if input values equals 15 and 19`, () => {
    expect(getHumanAge(15, 19)).toEqual([1, 1]);
  });

  test(`should return 0 for cat and dog if input values < 15`, () => {
    expect(getHumanAge(7, 7)).toEqual([0, 0]);
  });

  test(`should return 1 for cat and 0 for dog 
  if input values equals 15 and 7`, () => {
    expect(getHumanAge(15, 7)).toEqual([1, 0]);
  });

  test(`should return 2 for cat and dog
  if input values equals 24 and 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 3 for cat and 2 for dog
  if input values equals 28 and 28`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return 21 for cat and 17 for dogs
  if input values equals 100`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
