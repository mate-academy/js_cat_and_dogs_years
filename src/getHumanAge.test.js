'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(13, 7)).toBeInstanceOf(Array);
  });

  it(`should return [1, 1] if limit values cat=15, dog=15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [0, 0] if limit values cat=14, dog=14`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return [4, 2] if limit values cat=32, dog=24`, () => {
    expect(getHumanAge(32, 24)).toEqual([4, 2]);
  });

  it(`should return [4, 2] if limit values cat=32, dog=24`, () => {
    expect(getHumanAge(32, 24)).toEqual([4, 2]);
  });

  it(`should return [2, 4] if limit values cat=27, dog=34`, () => {
    expect(getHumanAge(27, 34)).toEqual([2, 4]);
  });
});
