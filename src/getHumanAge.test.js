'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('First element is my cats names in human years', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('The second element is my dogs age in human years', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('First 15 cat years give 1 human year', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('Next 9 cat years give 1 more human year', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('Every 4 next cat years give 1 extra human year', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('First 15 dog years give 1 human year', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('The next 9 dog years give 1 more human year', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('Every 5 next dog years give 1 extra human year', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
