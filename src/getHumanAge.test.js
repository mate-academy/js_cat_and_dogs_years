'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  it('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it('should retun [0, 0] for animalAge lower that 15 years ', () => {
    expect(getHumanAge(0, 14))
      .toEqual([0, 0]);
  });

  it(`should add 1 human year for next 9 years 
      if age is higher or equal than 15`, () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  it('should add 1 human year if animalAge is higher or equal than 24', () => {
    expect(getHumanAge(24, 28))
      .toEqual([2, 2]);
  });

  it(`should add 1 human year for every next 4 years of catAge
      after 24 years`, () => {
    expect(getHumanAge(28, 2))
      .toEqual([3, 0]);
  });

  it(`should add 1 human year for every next 5 years of dogAge
      after 24 years`, () => {
    expect(getHumanAge(23, 29))
      .toEqual([1, 3]);
  });

  it(`should return correct HumanAge for big values`, () => {
    expect(getHumanAge(125, 85))
      .toEqual([27, 14]);
  });
});
