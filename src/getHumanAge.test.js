'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0, 0 because the value is less than 15`, () => {
    expect(getHumanAge(0, 0)).toStrictEqual([0, 0]);
  });

  test(`should return 0, 0 because the value is less than 15`, () => {
    expect(getHumanAge(14, 14)).toStrictEqual([0, 0]);
  });

  test(`should return 1, 1 because the value is less than 24`, () => {
    expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);
  });

  test(`should return 1, 1 because the value is less than 24`, () => {
    expect(getHumanAge(23, 23)).toStrictEqual([1, 1]);
  });

  test(`should return 2, 2 because the value is less than 28 and 29`, () => {
    expect(getHumanAge(24, 24)).toStrictEqual([2, 2]);
  });

  test(`should return 2, 2 because the value is less than 28 and 29`, () => {
    expect(getHumanAge(27, 27)).toStrictEqual([2, 2]);
  });

  test(`should return 3, 2 because the value is less than 33 and 29`, () => {
    expect(getHumanAge(28, 28)).toStrictEqual([3, 2]);
  });

  test(`should return 21, 17 because the value is 100, 100`, () => {
    expect(getHumanAge(100, 100)).toStrictEqual([21, 17]);
  });
});
