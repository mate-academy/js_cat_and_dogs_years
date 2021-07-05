'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(15, 15)).toBeInstanceOf(Array);
  });

  it(`15 human years for csts ans dogs years`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`24 human years for csts ans dogs years`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`human years for csts ans dogs years`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`human years for csts ans dogs years`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });
});
