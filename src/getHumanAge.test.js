'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if input values are (0, 0)', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test(`should return [1, 1] for cat and dog 
  if input values equals (15, 19)`, () => {
    expect(getHumanAge(15, 19)).toEqual([1, 1]);
  });

  test(`should return [0, 0] if input values (7, 7)`, () => {
    expect(getHumanAge(7, 7)).toEqual([0, 0]);
  });

  test(`should return [1, 0] if input values are (15, 7)`, () => {
    expect(getHumanAge(15, 7)).toEqual([1, 0]);
  });

  test(`should return [2, 2] if input values are (24, 24)`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return [3, 2] if input values are (28, 28)`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return [21, 17] 
  if input values are (100, 100)`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
