'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`14 (15-1) human years should be equal to 
  0 years for cats and dogs`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  it(`15 human years should be equal to 
  1 year for cats and dogs`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  it(`23 (15+8) human years should be equal to 
  1 years for cats and dogs`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  it(`24 (15+9) human years should be equal to 
  2 years for cats and dogs`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  it(`27 human years for cats and 28 for dogs should be equal to 
  2 years for cats and dogs`, () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  it(`28 human years for cats and 29 for dogs should be equal to 
  3 years for cats and dogs`, () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });
});
