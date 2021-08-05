'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`shoud return array [0, 0] if cat age = 12 and dog age = 13`, () => {
    expect(getHumanAge(12, 13)).toEqual([0, 0]);
  });

  it(`shoud return array [1, 2] if cat age = 16 and dog age = 26`, () => {
    expect(getHumanAge(16, 26)).toEqual([1, 2]);
  });

  it(`shoud return array [1, 1] if cat age = 15 and dog age = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`shoud return array [2, 2] if cat age = 24 and dog age = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`shoud return array [1, 1] if cat age = 15 and dog age = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`shoud return array [3, 3] if cat age = 28 and dog age = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
