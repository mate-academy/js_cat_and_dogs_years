'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 when cat and dog younger than 15 years old', () => {
    const result = getHumanAge(7, 7);

    expect(result).toEqual([0, 0]);
  });

  test('should return 0 when cat and dog are 14 years old', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return 1 when cat and dog are 15 years old', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test(`should return 1 when cat and dog age are 
  between 15 and 23 years old`, () => {
    const result = getHumanAge(16, 22);

    expect(result).toEqual([1, 1]);
  });

  test(`should return 1 when cat and
  dog age are 23 years old`, () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test(`should return 1 when cat and 
  dog age are between 15 and 23 years old`, () => {
    const result = getHumanAge(16, 22);

    expect(result).toEqual([1, 1]);
  });

  test(`should return 2 when cat and
  dog age are 24 years old`, () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test(`should return 2 when cat and dog age
   are between 24 and 27 years old`, () => {
    const result = getHumanAge(25, 26);

    expect(result).toEqual([2, 2]);
  });

  test(`should return [3,2] when cat and
   dog age are 28 years old`, () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test(`should return 3 when cat is 28 years
  old and dog is 29 years old`, () => {
    const result = getHumanAge(28, 29);

    expect(result).toEqual([3, 3]);
  });

  test(`should return 4 when cat age is between 32 and 36 years
  old and dog age is between 34 and 39 years old`, () => {
    const result = getHumanAge(35, 37);

    expect(result).toEqual([4, 4]);
  });

  test(`should return [21, 17] when cat 
  and dog age is 100 years old`, () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
