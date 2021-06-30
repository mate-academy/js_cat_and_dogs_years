'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof getHumanAge()).toStrictEqual('object');
  });

  it(`15 human years should be equal to 1st dogs' and cats' year`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`24 human years should be equal to 2 dogs' and cats' years`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`+5 human years for each dogs' and cats' years more then 2`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`0 < 15 human years should be equal to 0 dogs' and cats' year`, () => {
    expect(getHumanAge(5, 2)).toEqual([0, 0]);
  });
});
