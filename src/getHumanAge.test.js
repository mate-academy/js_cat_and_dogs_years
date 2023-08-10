'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('zeroYears', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('fourteenYears', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('fifteenYears', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('twthreeYears', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('twfourYears', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('twsevenYears', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('tweightYears', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('hundred', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
