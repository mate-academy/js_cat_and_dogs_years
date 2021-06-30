'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof getHumanAge()).toBe('object');
  });

  it(`should return an array where the first element is 'human' age 
  of the cat and the second element is 'human' age of the dog`, () => {
    expect(getHumanAge(12, 7)).toEqual([0, 0]);
  });

  it(`should return an array with catToHuman = 0,
  dogToHuman = 0 if catAge < 15, dogAge < 15`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`should return an array with catToHuman = 1,
  dogToHuman = 2 if catAge = 15, dogAge = 24`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return an array with catToHuman = 2,
  dogToHuman = 2 if catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return an array with catToHuman = 3,
  dogToHuman = 6 if catAge = 28, dogAge = 44`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });
});
