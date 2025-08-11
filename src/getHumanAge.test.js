'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return human age for cat and dog
    when both are 0 years old`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return human age for cat and dog
    when it is less than 15 years old`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return human age for cat and dog
    when it is exactly 15 years old`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return human age for cat and dog
    when it is more than 16 years old`, () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test(`should return human age for cat and dog
    when it is exactly 23 years old`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return human age for cat and
    dog when it is exactly 27 years old`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return human ages for both cat
    and dog at various ages`, () => {
    expect(getHumanAge(32, 40)).toEqual([4, 5]);
  });
});
