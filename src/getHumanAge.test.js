'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if both pets are less than 15 year old', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [0, 0] if both pets are 0 years old', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return [1, 1] if both pets are 15 years old
    and less then 24`, () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] if both pets are exactly 24 years old', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return [2, 2] if both pets are
    between 24 and 27 years old`, () => {
    expect(getHumanAge(24, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] if both pets are exactly 28 years old', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return [3, 3] if the cat is 28
    and the dog is 29 years old`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test(`should return [4, 4] if the cat is 32
    and the dog is 34 years old`, () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  test(`should return [4, 5] if the cat is 35
    and the dog is 39 years old`, () => {
    expect(getHumanAge(35, 39)).toEqual([4, 5]);
  });

  test('should return [21, 17] if both pets are 100 years old', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
