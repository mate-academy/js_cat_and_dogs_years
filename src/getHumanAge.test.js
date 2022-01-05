'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return zeros when cat age = 14, dog age = 14`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return zeros when cat age = 0, dog age = 0`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return 1 when cat age = 15, dog age = 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return 1 when cat age =23, dog age = 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return 2 when cat age = 24, dog age = 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return 2 when cat age = 27, dog age = 27`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return [3, 2] when cat age = 28, dog age = 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return [21, 17] when cat age = 100, dog age = 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test(`should return '0' when ages = 0`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return 'NaN' when age = string`, () => {
    expect(getHumanAge('cat', 'dog'))
      .toEqual([NaN, NaN]);
  });

  test(`should return NaN when age is empty`, () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });

  test(`should return '0' when age is negative`, () => {
    expect(getHumanAge(-25, -36))
      .toEqual([0, 0]);
  });
});
