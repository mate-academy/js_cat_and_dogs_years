'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  // const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test(`the first element should return number equal cat's age in human years
the first element should return number equal dog's age in human years`, () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
  expect(getHumanAge(15, 15)).toEqual([1, 1]);
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
  expect(getHumanAge(28, 28)).toEqual([3, 2]);
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});

test(`Should return only numbers in array`, () => {
  const result = getHumanAge(0, 0);

  expect(typeof result[0]).toBe('number');
  expect(typeof result[1]).toBe('number');
});
