'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return [0,0] when cat age equals 0 and
  dog age equals 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return [0,0] when cat age equals 14 and
  dog age equals 14`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return [1,1] when cat age equals 15 and
  dog age equals 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return [1,1] when cat age equals 23 and
  dog age equals 23`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return [2,2] when cat age equals 24 and
  dog age equals 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return [2,2] when cat age equals 27 and
  dog age equals 27`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return [3,2] when cat age equals 28 and
  dog age equals 28`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return [21,17] when cat age equals 100 and
  dog age equals 100`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test(`should return [0,17] when cat age equals 3 and
  dog age equals 99`, () => {
    expect(getHumanAge(3, 99)).toEqual([0, 17]);
  });

  test(`should return [13,0] when cat age equals 70 and
  dog age equals 4`, () => {
    expect(getHumanAge(70, 4)).toEqual([13, 0]);
  });
});
