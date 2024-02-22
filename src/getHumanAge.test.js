'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 for cat and dog
   when they are less 0 years old`, () => {
    expect(getHumanAge(0, 0)).toStrictEqual([0, 0]);
  });

  test(`should return 0 for cat and dog when they are 14 years old`, () => {
    expect(getHumanAge(14, 14)).toStrictEqual([0, 0]);
  });

  test(`should return 1 for cat and dog when they are 15 years old`, () => {
    expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);
  });

  test(`should return 1 for cat and dog when they are 23 years old`, () => {
    expect(getHumanAge(23, 23)).toStrictEqual([1, 1]);
  });

  test(`should return 2 for cat and dog when they are 24 years old`, () => {
    expect(getHumanAge(24, 24)).toStrictEqual([2, 2]);
  });

  test(`should return 2 for cat and dog
  when they are less than 28 and 29 years old`, () => {
    expect(getHumanAge(27, 27)).toStrictEqual([2, 2]);
  });

  test(`should return 2 for cat and 3 for dog
  when they are less than 28 and 33 years old`, () => {
    expect(getHumanAge(28, 28)).toStrictEqual([3, 2]);
  });

  test(`should return 21 for cat and 17 for dog
  when they are less than 101 and 101 years old`, () => {
    expect(getHumanAge(100, 100)).toStrictEqual([21, 17]);
  });
});
