'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should return an array', () => {
    expect(getHumanAge(2, 3)).toBeInstanceOf(Array);
  });

  test('Should return rounded result', () => {
    expect(getHumanAge(3, 17)).toEqual([0, 1]);
  });

  test('First 15 cat years should give 1 human year', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test('24 cat years chould give 2 more human years', () => {
    expect(getHumanAge(24, 0)).toEqual([2, 0]);
  });

  test('Every 4 years after 24 should give 1 more human year', () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
  });

  test('First 15 dog years should give 1 human year', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('24 dog years chould give 2 human years', () => {
    expect(getHumanAge(0, 24)).toEqual([0, 2]);
  });

  test('Every 5 years after 24 should give 1 more human year', () => {
    expect(getHumanAge(0, 29)).toEqual([0, 3]);
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
  });
});
