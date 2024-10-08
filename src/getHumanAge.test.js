'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

describe('Cat to human age conversion', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('First 15 cat years give 1 human year', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test('The next 9 cat years give 1 more human year', () => {
    expect(getHumanAge(24, 0)).toEqual([2, 0]);
  });

  test('Every 4 next cat years give 1 extra human year', () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
    expect(getHumanAge(36, 0)).toEqual([5, 0]);
    expect(getHumanAge(40, 0)).toEqual([6, 0]);
  });
});

describe('Dog to human age conversion', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('First 15 dog years give 1 human year', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('The next 9 dog years give 1 more human year', () => {
    expect(getHumanAge(0, 24)).toEqual([0, 2]);
  });

  test('Every 5 next dog years give 1 extra human year', () => {
    expect(getHumanAge(0, 29)).toEqual([0, 3]);
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
    expect(getHumanAge(0, 39)).toEqual([0, 5]);
    expect(getHumanAge(0, 44)).toEqual([0, 6]);
  });
});
