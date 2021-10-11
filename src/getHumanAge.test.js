'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`returns an array if function arguments are passed`, () => {
    expect(getHumanAge(9, 8)).toBeInstanceOf(Array);
  });

  it(`15 human years for first cat and dog year`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`15 human years for first cat and dog year`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`+9 human years for second cat and dog year`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`+4 h/y for the cat's and +5 for the dog's age after 3 years`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });

  it(`Old people, old pets`, () => {
    expect(getHumanAge(72, 74)).toEqual([14, 12]);
  });

  it(`continuity of generations`, () => {
    expect(getHumanAge(1, 89)).toEqual([0, 15]);
  });
});
