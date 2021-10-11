'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(8, 1)).toBeInstanceOf(Array);
  });

  it(`should return [0, 0] with ages < 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return [1, 1] when ages [15; 23]`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [1, 1] when ages [15; 23]`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it(`should return [2, 2] when catAge is 24 
  and dogAge is 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [2, 2] when catAge is 27 
  and dogAge is 28`, () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  it(`should return [3, 3] when catAge is 28 
  and dogAge is 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [3, 3] when catAge is 31 
  and dogAge is 33`, () => {
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
  });

  it(`should return [4, 6] when catAge is 32 
  and dogAge is 44`, () => {
    expect(getHumanAge(32, 44)).toEqual([4, 6]);
  });
});
