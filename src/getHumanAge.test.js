'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('animals age until 15 years should give 0 years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('animals age above 15 and below 24 should give 1 year', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('animals age above 24 and below 28 should give 2 years', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('28 cat years should give 3 year and 28 dog years - 2', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('28 cat years should give 3 human year and 29 dog years - 3', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
