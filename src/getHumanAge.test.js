'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = getHumanAge(15, 16);

    expect(result).toBeInstanceOf(Array);
  });

  it(`shoud return an array [0, 0] when 'catAge' and 'dogAge' < 15 `, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`shoud return an array [1, 0] 
  when 'catAge' = 15 and 'dogAge' < 15 `, () => {
    expect(getHumanAge(15, 14)).toEqual([1, 0]);
  });

  it(`shoud return an array [0, 1] 
  when 'catAge' < 15 and 'dogAge' = 15 `, () => {
    expect(getHumanAge(14, 15)).toEqual([0, 1]);
  });

  it(`shoud return an array [1, 1] 
  when 'catAge' = 15 and 'dogAge' = 15 `, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`shoud return an array [1, 1] 
  when 'catAge' > 15, 'dogAge' > 15, 'catAge' < 24 and 'dogAge' < 24  )`, () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  it(`shoud return an array [2, 1] 
  when 'catAge' = 24,'dogAge' < 24 and 'dogAge' > 15`, () => {
    expect(getHumanAge(24, 23)).toEqual([2, 1]);
  });

  it(`shoud return an array [1, 2] 
  when 'catAge' < 24, 'catAge' > 15 and 'dogAge' = 24 `, () => {
    expect(getHumanAge(23, 24)).toEqual([1, 2]);
  });

  it(`shoud return an array [2, 2] 
  when 'catAge' = 24 and 'dogAge' = 24 `, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`shoud return an array [2, 2] 
  when 'catAge' > 24, 'catAge' < 28, 'dogAge' > 24 and 'dogAge' < 29 `, () => {
    expect(getHumanAge(27, 26)).toEqual([2, 2]);
  });

  it(`shoud return an array [3, 2] 
  when 'catAge' = 28,'dogAge' > 24 and 'dogAge' < 29`, () => {
    expect(getHumanAge(28, 26)).toEqual([3, 2]);
  });

  it(`shoud return an array [2, 3] 
  when 'catAge' < 28, 'catAge' > 24 and 'dogAge' = 29 `, () => {
    expect(getHumanAge(26, 29)).toEqual([2, 3]);
  });

  it(`shoud return an array [3, 3] 
  when 'catAge' = 28 and 'dogAge' = 29 `, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`shoud return an array [3, 3] 
  when 'catAge' > 28, 'catAge' < 32, 'dogAge' > 29 and 'dogAge' < 34 `, () => {
    expect(getHumanAge(30, 31)).toEqual([3, 3]);
  });
});
