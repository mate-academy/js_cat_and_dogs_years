'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('First 15 cat years give 1 human year', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test('the next 9 cat years give 1 more human year', () => {
    expect(getHumanAge(24, 0)).toEqual([2, 0]);
  });

  test('every 4 next cat years give 1 extra human year', () => {
    expect(getHumanAge(48, 0)).toEqual([8, 0]);
  });

  test('First 15 dog years give 1 human year', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('The next 9 dog years give 1 more human year', () => {
    expect(getHumanAge(0, 24)).toEqual([0, 2]);
  });

  test('Every additional 5 dog years give 1 extra human year', () => {
    expect(getHumanAge(0, 29)).toEqual([0, 3]);
  });
});
