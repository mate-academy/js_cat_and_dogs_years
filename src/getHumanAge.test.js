'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`input values should be of type 'number'`, () => {
    expect(getHumanAge()).not.toBeNaN();
  });

  it(`should return [0,0] if dogAge = 0 and catAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return [0, 0] if catAge = 10, dogAge = 10`, () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  it(`should return [0,0] if dogAge < 15 and catAge < 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return [1,1] if dogAge = 15 and catAge = 15`,
    () => {
      expect(getHumanAge(15, 15)).toEqual([1, 1]);
    });

  it(`should return [1,1] if dogAge = 16 and catAge = 16 `,
    () => {
      expect(getHumanAge(16, 16)).toEqual([1, 1]);
    });

  it(`should return [1,1] if dogAge = 23 and catAge = 23 `, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it(`should return [2,2] if dogAge = 25 and catAge = 25 `, () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  it(`should return [2,2] if dogAge = 24 and catAge = 24 `, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [2,2] if dogAge = 28 and catAge = 27`,
    () => {
      expect(getHumanAge(27, 28)).toEqual([2, 2]);
    });

  it(`should return [3,3] if dogAge = 29 and catAge = 28`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [3,3] if dogAge = 30 and catAge = 29`, () => {
    expect(getHumanAge(29, 30)).toEqual([3, 3]);
  });

  it(`should return [17,21] if dogAge = 101 and catAge = 101`, () => {
    expect(getHumanAge(101, 101)).toEqual([21, 17]);
  });

  it(`should return [8, 7] if catAge = 50, dogAge = 50`, () => {
    expect(getHumanAge(50, 50)).toEqual([8, 7]);
  });
});
