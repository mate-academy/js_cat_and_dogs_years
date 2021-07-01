'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge())
      .toBeInstanceOf(Array);
  });

  it(`14 human years should be equal to 0 years for cats and dogs`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  it(`15 human years should be equal to 1 year for cats and dogs`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  it(`25 human years should be equal to 2 years for cats and dogs`, () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  it(`+5 human years for each dogs and +4 human years for each cats
after 24 years`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  it(`0 < 15 human years should be equal to 0 years for dogs and cats`, () => {
    expect(getHumanAge(10, 13))
      .toEqual([0, 0]);
  });
});
