'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return 0 animals age for 0 human age `, () => {
    expect(getHumanAge(0, 0)).toStrictEqual([0, 0]);
  });

  it(`should return 0 animals age for human age less than 15 years`, () => {
    expect(getHumanAge(11, 9)).toStrictEqual([0, 0]);
  });

  it(`should return 1 animals age for human age is 15 years`, () => {
    expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);
  });

  it(`should return 1 animals age for human age between 15 and 24`, () => {
    expect(getHumanAge(22, 18)).toStrictEqual([1, 1]);
  });

  it(`should return 2 animals age for human age is 24 years`, () => {
    expect(getHumanAge(24, 24)).toStrictEqual([2, 2]);
  });

  it(`should return +1 animals age for +4 years for c and +5 for d`, () => {
    expect(getHumanAge(45, 87)).toStrictEqual([7, 14]);
  });

  it(`should return NaN if age is not a number`, () => {
    expect(getHumanAge('a', 'b')).toStrictEqual([NaN, NaN]);
  });

  it(`should return 0 if age is negative number`, () => {
    expect(getHumanAge(-3, -7)).toStrictEqual([0, 0]);
  });
});
