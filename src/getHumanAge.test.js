'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return catsAge=0 and dogaAge=0 if humanAge=0 `, () => {
    expect(getHumanAge(0, 0)).toStrictEqual([0, 0]);
  });

  it(`should return catsAge=0 and dogaAge=0 if humanAge<15`, () => {
    expect(getHumanAge(11, 9)).toStrictEqual([0, 0]);
  });

  it(`should return catsAge=1 and dogaAge=1 if humanAge=15`, () => {
    expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);
  });

  it(`should return catsAge=1 and dogaAge=1 if humanAge=16`, () => {
    expect(getHumanAge(16, 16)).toStrictEqual([1, 1]);
  });

  it(`should return catsAge=1 and dogaAge=1 if 15<humanAge<24`, () => {
    expect(getHumanAge(22, 18)).toStrictEqual([1, 1]);
  });

  it(`should return catsAge=1 and dogaAge=1 if humanAge=23`, () => {
    expect(getHumanAge(23, 23)).toStrictEqual([1, 1]);
  });

  it(`should return catsAge=2 and dogaAge2= if humanAge=24`, () => {
    expect(getHumanAge(24, 24)).toStrictEqual([2, 2]);
  });

  it(`should return catsAge=7 and dogaAge=6 if humanAge=45`, () => {
    expect(getHumanAge(45, 45)).toStrictEqual([7, 6]);
  });
});
