'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(10, 5).constructor.name)
      .toEqual('Array');
  });

  it(`should count years correctly for boundary values`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  it(`should count years correctly for years less than 15`, () => {
    expect(getHumanAge(4, 5))
      .toEqual([0, 0]);
  });

  it(`should count correctly when catAge and dogAge between 15 and 24`, () => {
    expect(getHumanAge(22, 20))
      .toEqual([1, 1]);
  });

  it(`should count correctly when catAge > 24 and dogAge > 24`, () => {
    expect(getHumanAge(28, 44))
      .toEqual([3, 6]);
  });

  it(`should return '0' if "age" argument is null`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should count correctly when catAge > 28 and dogAge > 29`, () => {
    expect(getHumanAge(30, 44))
      .toEqual([3, 6]);
  });
});
