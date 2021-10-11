'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return '0' for cat and '0' for dog for less than 15 human years`,
    () => {
      expect(getHumanAge(14, 14)).toEqual([0, 0]);
    });

  it(`should return '1' for cat and '1' for dog for 15 human years`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return '1' for cat and '1' for dog for less then 24 human years`,
    () => {
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

  it(`should return '2' for cat and '2' for dog for 24 human years`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return '2' for cat for less then 28 human years`, () => {
    expect(getHumanAge(27, 0)).toEqual([2, 0]);
  });

  it(`should return '2' for dog for less then 29 human years`, () => {
    expect(getHumanAge(0, 28)).toEqual([0, 2]);
  });

  it(`should return '3' for cat for 28 human years`, () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
  });

  it(`should return '3' for dog for 29 human years`, () => {
    expect(getHumanAge(0, 29)).toEqual([0, 3]);
  });

  it(`should return '4' for cat for 32 human years`, () => {
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
  });

  it(`should return '4' for dog for 34 human years`, () => {
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
  });
});
