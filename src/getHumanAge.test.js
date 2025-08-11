'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test(`should return array`, () => {
    expect(getHumanAge(0, 0)).toBeInstanceOf(Array);
  });

  test(`should return array with 2 items`, () => {
    expect(getHumanAge(0, 0).length).toBe(2);
  });

  test(`should return 0 for both if catAge and dogAge is zero`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return 0 for both if catAge and dogAge less than 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return 1 for both if catAge and dogAge is 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 1 for both if 15 <= catAge and dogAge < 24`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return 2 for both if catAge and dogAge is 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 2 for both if 24 <= catAge and dogAge < 28`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return 3 for cat and
    2 for dog if catAge and dogAge is 28`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return 3 for both if catAge is 28 and dogAge is 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test(`should return 21 for cat and
    17 for dog if catAge and dogAge is 100`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
