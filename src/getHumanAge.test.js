'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof getHumanAge(15, 15)).toEqual('object');
  });

  it(`should return 0 cat age if human age = 14`, () => {
    expect(getHumanAge(14, 8)).toEqual([0, 0]);
  });

  it(`should return 1 cat age if human age = 15`, () => {
    expect(getHumanAge(15, 8)).toEqual([1, 0]);
  });

  it(`should return 1 cat age if human age = 23`, () => {
    expect(getHumanAge(23, 8)).toEqual([1, 0]);
  });

  it(`should return 2 cat age if human age = 24`, () => {
    expect(getHumanAge(24, 8)).toEqual([2, 0]);
  });

  it(`should return 2 cat age if human age = 27`, () => {
    expect(getHumanAge(27, 8)).toEqual([2, 0]);
  });

  it(`should return 3 cat age if human age = 28`, () => {
    expect(getHumanAge(28, 8)).toEqual([3, 0]);
  });

  it(`should return 3 cat age if human age = 31`, () => {
    expect(getHumanAge(31, 8)).toEqual([3, 0]);
  });

  it(`should return 4 cat age if human age = 32`, () => {
    expect(getHumanAge(32, 8)).toEqual([4, 0]);
  });

  it(`should return 4 cat age if human age = 35`, () => {
    expect(getHumanAge(35, 8)).toEqual([4, 0]);
  });

  it(`should return 0 dog age if human age = 14`, () => {
    expect(getHumanAge(8, 14)).toEqual([0, 0]);
  });

  it(`should return 1 dog age if human age = 15`, () => {
    expect(getHumanAge(8, 15)).toEqual([0, 1]);
  });

  it(`should return 1 dog age if human age = 23`, () => {
    expect(getHumanAge(8, 23)).toEqual([0, 1]);
  });

  it(`should return 2 dog age if human age = 24`, () => {
    expect(getHumanAge(8, 24)).toEqual([0, 2]);
  });

  it(`should return 2 dog age if human age = 28`, () => {
    expect(getHumanAge(8, 28)).toEqual([0, 2]);
  });

  it(`should return 3 dog age if human age = 29`, () => {
    expect(getHumanAge(8, 29)).toEqual([0, 3]);
  });

  it(`should return 3 dog age if human age = 33`, () => {
    expect(getHumanAge(8, 33)).toEqual([0, 3]);
  });

  it(`should return 4 dog age if human age = 34`, () => {
    expect(getHumanAge(8, 34)).toEqual([0, 4]);
  });

  it(`should return 4 dog age if human age = 38`, () => {
    expect(getHumanAge(8, 38)).toEqual([0, 4]);
  });
});
