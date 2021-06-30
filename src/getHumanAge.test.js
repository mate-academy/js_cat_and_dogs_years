'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`shoud return array [0, 0] if cat age = 12 and dog age = 11`, () => {
    expect(getHumanAge(12, 11)).toEqual([0, 0]);
  });

  it(`shoud return array [1, 1] if cat age = 15 and dog age = 16`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`shoud return array [2, 6] if cat age = 25 and dog age = 44`, () => {
    expect(getHumanAge(25, 44)).toEqual([2, 6]);
  });

  it(`shoud return array [1, 1] if cat age = 55 and dog age = 44`, () => {
    expect(getHumanAge(55, 44)).toEqual([9, 6]);
  });
});
