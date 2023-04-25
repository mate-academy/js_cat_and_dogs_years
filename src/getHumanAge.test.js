'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(16, 16))
      .toBeInstanceOf(Array);
  });

  test(`should return an array with two zeros
    if catAge and dogAge are equal to 0`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return an array with two zeros
    if catAge and dogAge < 15`, () => {
    expect(getHumanAge(13, 11))
      .toEqual([0, 0]);
  });

  test(`should return an array with two ones
    if catAge and dogAge = 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return an array with two ones
    if catAge and dogAge > 15 but < 24`, () => {
    expect(getHumanAge(16, 23))
      .toEqual([1, 1]);
  });

  test(`should return an array with two twoes
    if catAge and dogAge = 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return an array with two twoes
    if catAge and dogAge = 27`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return an array with converted
    catAge and dogAge to human age if catAge and dogAge >= 28`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);

    expect(getHumanAge(54, 68))
      .toEqual([9, 10]);
  });
});
