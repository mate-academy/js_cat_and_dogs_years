'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  // const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be return 0 if catAge or dogAge is equal 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be return a right value for first 14 cat & dog age', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be return a right value for first 15 cat & dog age', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be return a right value for first 24 cat & dog age', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should be return a right value for first 28 cat & dog age', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should be return a right value for dogAge & catAge', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});

test(`the first element should return
 number equal cat's age in human years`, () => {
  expect(getHumanAge(100, 0)).toEqual([21, 0]);
});

test(`the second element should return 
number equal dog's age in human years`, () => {
  expect(getHumanAge(0, 100)).toEqual([0, 17]);
});

test(`checking output for both imputs`, () => {
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});

test(`function should return
 zero with 0 imputs`, () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);
});

test(`Should return only numbers in array`, () => {
  const result = getHumanAge(1, 2);

  expect(typeof result[0]).toBe('number');
  expect(typeof result[1]).toBe('number');
});
