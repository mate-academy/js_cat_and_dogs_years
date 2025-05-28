'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`Should return [0, 0] for (0, 0) as input`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`Should return [0, 0] for (14, 14) as input`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`Should return [1, 1] for (15, 15) as input`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`Should return [1, 1] for (23, 23) as input`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`Should return [2, 2] for (24, 24) as input`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`Should return [2, 2] for (27, 27) as input`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`Should return [3, 2] for (28, 28) as input`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`Should return [21, 17] for (100, 100) as input`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
