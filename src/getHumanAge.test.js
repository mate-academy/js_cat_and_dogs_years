'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return zeros 
  if catAge and dogAge are equal zeros`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return 0 human year
  if catAge and dogAge < 15`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return 1 human year
  if catAge and dogAge are equal 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return 1 human year
  if catAge and dogAge < 24`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should add 1 more human year
  the next 9 cat and dog years`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should add 1 more human year
  if catAge and dogAge < 28`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should add 1 extra human year
  for every 4 next cat years`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should add 1 extra human year
  for every 4 and 5 next cat and dog years in accordance`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
