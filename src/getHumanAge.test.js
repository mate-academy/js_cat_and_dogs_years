'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('cat age < 15 == 0, dog age < 15 == 0 should be 0', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('cat age >= 15 should be 1, dog age >= 15 should be 1', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('at age < 24 == 0, dog age < 24 == 0 should be 0', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('cat age >= 24 should be 1, dog age >= 24 should be 1', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('cat age < 28 should be 1, dog age < 29 should be 1', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('cat age >= 28 should be 1, dog age >= 29 should be 1', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('cat age < 32 should be 1, dog age < 34 should be 1', () => {
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
  });

  test('cat age >= 32 should be 1, dog age >= 34 should be 1', () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  test('cat age == 0 should be 0, dog age == 0 should be 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`remainder should be discarded if arguments have
     floating numbers`, () => {
    expect(getHumanAge(25.5, 15.1)).toEqual([2, 1]);
  });
});
