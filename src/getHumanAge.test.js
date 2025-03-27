'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(15, 15))
      .toBeInstanceOf(Array);
  });

  test('should return an array with the length of two', () => {
    expect(getHumanAge(15, 15))
      .toHaveLength(2);
  });

  test(`Animals human age should be 0, if any of
  catAge or dogAge is equal to 0`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`Animals human age should be 0, if any of
  catAge or dogAge is less than 15`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`Animals human age should be 1, if any of
  catAge or dogAge is equal or more than 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`Animals human age should be 1, if any of
  catAge or dogAge is less than 24`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`Animals human age should be 2, if any of
  catAge or dogAge is equal or more than 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`Cat human age should be 2, if
  catAge is less than 28`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`Dog human age should be 2, if
  dogAge is less than 29`, () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test(`Cat human age should be 3, if
  catAge is equal or more than 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`Dog human age should be 3, if
  dogAge is equal or more than 29`, () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test(`Cat human age should be incremented by 1 each 4 cat years,
  if catAge is equal or more than 24`, () => {
    expect(getHumanAge(100, 28))
      .toEqual([21, 2]);
  });

  test(`Dog human age should be incremented by 1 each 5 dog years,
  if dogAge is equal or more than 24`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
