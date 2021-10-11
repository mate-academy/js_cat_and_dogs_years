'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge([]))
      .toBeInstanceOf(Array);
  });

  it(`should return first cat and dog year for 15 human years`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return second cat and dog year for 24 human years`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return 4 cat years for 32 human`, () => {
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
  });

  it(`should return 6 cat years for 40 human`, () => {
    expect(getHumanAge(40, 0)).toEqual([6, 0]);
  });

  it(`should return 4 dog years for 37 human`, () => {
    expect(getHumanAge(0, 37)).toEqual([0, 4]);
  });

  it(`should return 6 dog years for 47 human`, () => {
    expect(getHumanAge(0, 47)).toEqual([0, 6]);
  });

  it(`should return 0 cat and dog years for 10 human`, () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  it(`should return 0 cat and dog years for 14 human`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });
});

// There is the rules how calculate the 'human' age:

// Cat age:
// 15 human years for first cat year
// +9 human years for second cat year
// +4 human years for each cat year after that

// Dog age:
// 15 human years for first dog year
// +9 human years for second dog year
// +5 human years for each dog year after that
// Examples:

// getHumanAge(9, 8) === [0, 0]
// getHumanAge(15, 24) === [1, 2]
// getHumanAge(28, 44) === [3, 6]
