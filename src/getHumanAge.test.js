'use strict';

describe(`getHumanAge`, () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`function should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return zeros if inputs are zeros`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return zeros if inputs are < 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return 1 if the input >= 15 and less than 24`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 2 if the input equals 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 2 if input is 27`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return different
  results for dog years and for cat years if input is 28`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return 3 if the input equals 29`, () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test(`should return results for random values`, () => {
    expect(getHumanAge(56, 59)).toEqual([10, 9]);
  });
});
