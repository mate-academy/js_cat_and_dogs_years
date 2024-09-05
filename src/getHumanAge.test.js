'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should convert 0 cat age and 0 dog age to 0 human years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should convert cat age 10 and dog age 10 to 1 human year', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should convert cat,dog 20 and 22 age to 3 and 2 human years', () => {
    expect(getHumanAge(20, 22)).toEqual([1, 1]);
  });

  test('should convert cat age 24 and dog age 24 to 2 human years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should convert cat age 30 and dog age 35 to 4 human years', () => {
    expect(getHumanAge(30, 35)).toEqual([3, 4]);
  });

  test('should convert cat,dog age 40 and 25 to 6 and 2 human years', () => {
    expect(getHumanAge(40, 25)).toEqual([6, 2]);
  });

  test('should convert cat,dog 28 and 29 to 4 and 3 human years', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should convert cat age 0 and dog age 0 to 0 human years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should convert cat,dog 100 and 100 to 12 and 14 human years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
