'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`both cases: should return 0 if age is less than 15`, () => {
    expect(getHumanAge(7, 14)).toEqual([0, 0]);
  });

  it(`both cases: should return 1
    if age is more than or equal 15 and less then 24`, () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  it(`both cases: should return 3
    if age is more than 29`, () => {
    expect(getHumanAge(31, 32)).toEqual([3, 3]);
  });

  it(`cat case: should return 2 if age
    is more than or equal 24 and less then 28`, () => {
    expect(getHumanAge(24, 1)).toEqual([2, 0]);
  });

  it(`cat case: should return 2 if age
    is more than or equal 24 and less then 28`, () => {
    expect(getHumanAge(27, 1)).toEqual([2, 0]);
  });

  it(`cat case: should return 3 if age
    is more than or equal then 28`, () => {
    expect(getHumanAge(28, 1)).toEqual([3, 0]);
  });

  it(`dog case: should return 2 if age
    is more than or equal 24 and less then 29`, () => {
    expect(getHumanAge(1, 24)).toEqual([0, 2]);
  });

  it(`dog case: should return 2 if age
    is more than or equal 24 and less then 29`, () => {
    expect(getHumanAge(1, 28)).toEqual([0, 2]);
  });

  it(`dog case: should return 3 if age
    is more than or equal then 29`, () => {
    expect(getHumanAge(1, 29)).toEqual([0, 3]);
  });
});
