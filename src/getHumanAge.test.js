'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return array with zeros if catAge and dogAge are zeros', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  // eslint-disable-next-line max-len
  test('should return array with zeros if catAge and dogAge are less than 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should add a year if catAge and dogAge are 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should not add a year if catAge and dogAge are less than 24', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should add a year if catAge and dogAge are 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should not add a year if catAge and dogAge are less than 28', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should add a year if catAge are 28', () => {
    expect(getHumanAge(28, 27))
      .toEqual([3, 2]);
  });

  test('should not add a year if dogAge are 28', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should add a year if dogAge are 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should add an extra year every 4 years for catAge after 28', () => {
    expect(getHumanAge(100, 29))
      .toEqual([21, 3]);
  });

  test('should add an extra year every 5 years for dogAge after 29', () => {
    expect(getHumanAge(28, 100))
      .toEqual([3, 17]);
  });
});
