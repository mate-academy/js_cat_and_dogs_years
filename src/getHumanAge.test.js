'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`1 dogNcat year equal to 15 human years`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`2 dogNcat year equal to 24 human tears`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`3 dogNcat year equal to 
  28 yrs of a hmn in trms of a cat and 29 for a dog`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`8 dogNcat year equal to 48 hmn yrs 4 cat 
  and 54 hmn yrs 4 a dog`, () => {
    expect(getHumanAge(48, 54)).toEqual([8, 8]);
  });

  it(`14 catYrs equal to 72 hmnYrs 
  and 16 dogYrs equal to 94 hmnYrs`, () => {
    expect(getHumanAge(72, 94)).toEqual([14, 16]);
  });

  it(`human years <15 it's equal to 0 dogNcat years`, () => {
    expect(getHumanAge(4, 8)).toEqual([0, 0]);
  });
});
