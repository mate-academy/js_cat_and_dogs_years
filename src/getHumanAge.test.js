'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if 0 is passed', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 if years passed are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 if years passed are equal to 1', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 if years passed are less than 24', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 if years passed are equal to 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 2 if years passed are bigger than 24 and less or
        equal to 27 and 28 respectively`,
  () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return 2 and 3 if years passed are bigger than 24 and more or
        equal to 28 and 29 respectively`, () => {
    expect(getHumanAge(28, 27)).toEqual([3, 2]);
  });

  test(`should return 2 and 3 if years passed are bigger than 24 and more or
        equal to 28 and 29 respectively`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test(`should return correct number of human years based
  on args passed`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
