'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('if a cat and dog are 0 years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('if a cat and dog are <15 years', () => {
    expect(getHumanAge(2, 11)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('if a cat and dog are 15 <= years < 24', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
    expect(getHumanAge(17, 22)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('if a cat and dog are 24 <= years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
    expect(getHumanAge(48, 59)).toEqual([8, 9]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('if nothing enter', () => {
    expect(getHumanAge()).toEqual([NaN, NaN]);
  });

  test('if enter one parameter ', () => {
    expect(getHumanAge(25)).toEqual([2, NaN]);
  });
});
