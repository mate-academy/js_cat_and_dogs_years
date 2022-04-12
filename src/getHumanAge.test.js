'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  it('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should retern an array with 2 values`, () => {
    expect(getHumanAge(9, 2)).toHaveLength(2);
  });

  it(`should retern [0, 0] if animal's 
  age is less than 15 not inclusive`, () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  it(`should retern 1 human year if animal's 
  age is between 15 and 23 years inclusive`, () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  it(`should add 1 human year for every next 4 cat's years
   starting from 24 year inclusive`, () => {
    expect(getHumanAge(24, 23)).toEqual([2, 1]);
  });

  it(`should add 1 human year for every next 5 dog's years
   starting from 24 year inclusive`, () => {
    expect(getHumanAge(56, 24)).toEqual([10, 2]);
  });
});
