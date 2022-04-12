'use strict';

describe(`getHumanAge`, () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge())
      .toBeInstanceOf(Array);
  });

  it(`should return an array with 2 elements`, () => {
    expect(getHumanAge(0, 0))
      .toHaveLength(2);
  });

  it(`should return [0,0]
   if catAge & dogAge less than 15`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  it(`should return [1,1]
   if catAge & dogAge equal to 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  it(`should return [1,1]
   if catAge & dogAge less than 24`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  it(`should return [2,2]
   if catAge & dogAge equal to 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  it(`should return [2,2]
   if catAge less than 28 & dogAge less than 29`, () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  it(`should return [3,3]
   if catAge equal to 28 & dogAge equal to 29`, () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  it(`should return [6,5]
   if catAge & dogAge equal to 43`, () => {
    expect(getHumanAge(43, 43))
      .toEqual([6, 5]);
  });
});
