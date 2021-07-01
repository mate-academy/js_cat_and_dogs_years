'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return NaN if 'catAge', 'dogAge' is not a number`, () => {
    expect(getHumanAge('cat', 'dog')).toEqual([NaN, NaN]);
  });

  // boundary values testing
  it(`should return [0, 0] if catAge = 0, dogAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return [1, 1] if catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [1, 1] if catAge = 14, dogAge = 14`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return [1, 1] if catAge = 23, dogAge = 23`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it(`should return [2, 2] if catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [2, 2] if catAge = 27, dogAge = 28`, () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  it(`should return [3, 3] if catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [3, 3] if catAge = 31, dogAge = 33`, () => {
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
  });

  it(`should return [4, 4] if catAge = 32, dogAge = 34`, () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  // equivalence classes testing
  it(`should return [0, 0] if catAge = 10, dogAge = 10`, () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  it(`should return [1, 1] if catAge = 20, dogAge = 20`, () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  it(`should return [8, 7] if catAge = 50, dogAge = 50`, () => {
    expect(getHumanAge(50, 50)).toEqual([8, 7]);
  });
});
