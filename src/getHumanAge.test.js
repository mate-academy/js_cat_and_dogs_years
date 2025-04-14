'use strict';

describe('./getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should be 0 values if arguments are less than 15`, () => {
    const result = getHumanAge(12, 13);

    expect(result).toEqual([0, 0]);
  });

  test(`should add 1 human year for the first 15 animal years`, () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test(`should be 1 human year if dog and cats years
      are greater than 15 and less than 24 animal years`, () => {
    const result = getHumanAge(21, 22);

    expect(result).toEqual([1, 1]);
  });

  test(`should be 2 human years if dog and cats years
      are greater or equal than 24 animal years`, () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test(`should add 1 human years for every 4 cat years after 24 animal years
      and 1 human year for every 5 dog years after 24 animal years`, () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
