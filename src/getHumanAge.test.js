'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return an array [0, 0] with catAge = 9 and dogAge = 8`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`should return an array [1, 1] with catAge = 15 and dogAge = 20`, () => {
    expect(getHumanAge(15, 20)).toEqual([1, 1]);
  });

  it(`should return an array [0, 0] with catAge = 10 and dogAge = 7`, () => {
    expect(getHumanAge(10, 7)).toEqual([0, 0]);
  });

  it(`should return an array [1, 2] with catAge = 15 and dogAge = 24`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return an array [28, 44] with catAge = 3 and dogAge = 6`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });

  it(`should return an array [0, 0] with catAge = 14 and dogAge = 14`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return an array [1, 1] with catAge = 15 and dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return an array [1, 1] with catAge = 16 and dogAge = 16`, () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  it(`should return an array [1, 1] with catAge = 23 and dogAge = 23`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it(`should return an array [2, 2] with catAge = 24 and dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return an array [2, 2] with catAge = 25 and dogAge = 25`, () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  it(`should return an array [2, 2] with catAge = 27 and dogAge = 28`, () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  it(`should return an array [3, 3] with catAge = 28 and dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return an array [3, 3] with catAge = 29 and dogAge = 30`, () => {
    expect(getHumanAge(29, 30)).toEqual([3, 3]);
  });
});
