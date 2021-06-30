'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`getHumanAge(15, 29) should return [1, 3]`, () => {
    expect(getHumanAge(15, 29)).toMatchObject([1, 3]);
  });

  it(`getHumanAge(5, 7) should return [0, 0]`, () => {
    expect(getHumanAge(5, 7)).toMatchObject([0, 0]);
  });

  it(`getHumanAge(34, 49) should return [4, 7]`, () => {
    expect(getHumanAge(34, 49)).toMatchObject([4, 7]);
  });

  it(`input: catAge = 0, dogAge= 0 should return [0, 0]`, () => {
    expect(getHumanAge(0, 0)).toMatchObject([0, 0]);
  });

  it(`input: catAge = 15.5, dogAge= 17.3 should return [1, 1]`, () => {
    expect(getHumanAge(15.5, 17.3)).toMatchObject([1, 1]);
  });

  it(`input values should be of type 'number'`, () => {
    expect(getHumanAge()).not.toBeNaN();
  });

  it(`getHumanAge(15, 15) should return [1, 1]`, () => {
    expect(getHumanAge(15, 15)).toMatchObject([1, 1]);
  });

  it(`getHumanAge(24, 24) should return [2, 2]`, () => {
    expect(getHumanAge(24, 24)).toMatchObject([2, 2]);
  });

  it(`getHumanAge(29, 29) should return [3, 3]`, () => {
    expect(getHumanAge(29, 29)).toMatchObject([3, 3]);
  });
});
