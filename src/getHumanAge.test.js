'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(36, 51)).toBeInstanceOf(Array);
  });

  it(`should converts human years into cat and dog years`, () => {
    expect(getHumanAge(36, 51)).toEqual([5, 7]);
  });

  it(`the input data for cats and dogs may be the same`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`the input data for cats and dogs may be the different`, () => {
    expect(getHumanAge(4, 5)).toEqual([0, 0]);
  });

  it(`return 0 if "cats age" < 15`, () => {
    expect(getHumanAge(9, 15)).toEqual([0, 1]);
  });

  it(`return 0 if "dogs age" < 15`, () => {
    expect(getHumanAge(15, 9)).toEqual([1, 0]);
  });

  it(`return 1 if "cats age" < 24`, () => {
    expect(getHumanAge(23, 14)).toEqual([1, 0]);
  });

  it(`return 1 if "dogs age" < 24`, () => {
    expect(getHumanAge(14, 23)).toEqual([0, 1]);
  });

  it(`if "cats age" > 24, then ("cats age" - 24) * 4`, () => {
    expect(getHumanAge(66, 23)).toEqual([12, 1]);
  });

  it(`if "dogs age" > 24, then ("dogs age" - 24) * 5`, () => {
    expect(getHumanAge(66, 57)).toEqual([12, 8]);
  });
});
