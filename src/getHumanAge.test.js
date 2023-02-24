'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0s when cat's age and dog's age are 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return 0s when cat's age and dog's age are less than 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return 1s when cat's age and dog's age are 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 1s when cat's age and dog's age are less than 24`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return 2s when cat's age and dog's age are 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 2s when cat's age and dog's age are less than 28`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return 3 for cat and 2 for dog 
  when cat's age and dog's age are 28`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return 21 for cat and 17 for dog 
  when cat's age and dog's age are 100`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
