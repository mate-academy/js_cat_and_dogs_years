'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 when HumanAge < -15`, () => {
    expect(getHumanAge(-16, -16))
      .toEqual([0, 0]);
  });

  test(`should return 0 when HumanAge < 1`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return 0 when cat age <= 14, dog age <= 14`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return 1 when cat age is 15, dog age is 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return 1 when cat age <= 23, dog age <= 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return 2 when cat age is 24, dog age is 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return 2 when cat age is 27, dog age is 27`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return ages [3, 2] when they is 28 years old`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return ages [21, 17] when they 100 years old`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
