'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    expect(getHumanAge(1, 2)).toBeInstanceOf(Array);
  });

  test(`should convert ages if cat and dog are equal 0`,
    () => {
      expect(getHumanAge(0, 0)).toEqual([0, 0]);
    });

  test(`should convert ages if cat and dog are younger than 15 years old`,
    () => {
      expect(getHumanAge(14, 14)).toEqual([0, 0]);
    });

  test(`should convert ages if cat and dog are equal to 15 years old`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should convert ages if cat and dog are younger than 24 years old`,
    () => {
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

  test(`should convert ages if cat and dog are equal to 24 years old`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should convert ages if cat and dog are younger than 27 years old`,
    () => {
      expect(getHumanAge(27, 27)).toEqual([2, 2]);
    });

  test(`should convert ages  if cat and dog are equal to 28 years old`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should convert ages if cat and dog are equal to 29 years old`, () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test(`should convert ages if cat and dog  more than 29 years old`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
