'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`first 15 cat and dog years should give 1 human year`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`the next 9 cat and dog years should give 1 more human year`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`every 4 next cat years should give 1 extra human year`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`every 5 next dog years should give 1 extra human year`, () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test(`0 cat and dog years should give 0 human years`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`14 cat and dog years should give 0 human years`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`23 cat and dog years should give 1 human years`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });
});
