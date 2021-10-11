'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return zero cat and dog year for less than 15 human years`, () => {
    expect(getHumanAge(8, 9)).toEqual([0, 0]);
  });

  it(`should return first cat and dog year for 15 human years`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return second cat and dog year for 24 human years`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return 4 cat years for 32 human years`, () => {
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
  });

  it(`should return 4 dog years for 37 human years`, () => {
    expect(getHumanAge(0, 37)).toEqual([0, 4]);
  });

  it(`should return 6 cat years for 40 human years`, () => {
    expect(getHumanAge(40, 0)).toEqual([6, 0]);
  });

  it(`should return 6 dog years for 47 human years`, () => {
    expect(getHumanAge(0, 47)).toEqual([0, 6]);
  });
});
