'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(0, 0))
      .toBeInstanceOf(Array);
  });
  // should return 500.05 when input is 10001

  it(`should return '[0, 0]' when input 'catAge' is '0'
      and 'dogAge' is '0'`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  it(`should return '[0, 0]' when input 'catAge' is '5' 
      and 'dogAge' is '5'`, () => {
    expect(getHumanAge(5, 5))
      .toEqual([0, 0]);
  });

  it(`should return '[0, 0]' when input 'catAge' is '14' 
      and 'dogAge' is '14'`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  it(`should return '[1, 1]' when input 'catAge' is '15' 
      and 'dogAge' is '15'`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  it(`should return '[1, 1]' when input 'catAge' is '20' 
      and 'dogAge' is '20'`, () => {
    expect(getHumanAge(20, 20))
      .toEqual([1, 1]);
  });

  it(`should return '[1, 1]' when input 'catAge' is '23' 
      and 'dogAge' is '23'`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  it(`should return '[2, 2]' when input 'catAge' is '24' 
      and 'dogAge' is '24'`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  it(`should return '[21, 17]' when input 'catAge' is '100' 
      and 'dogAge' is '100'`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
