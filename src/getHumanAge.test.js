'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Human years should be 0 if animal year < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('First 15 animal years give 1 human year', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('The next 9 animal years give 1 more human year', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('Every 4 next cat years give 1 extra human year', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('Every 5 next dog years give 1 extra human year', () => {
    expect(getHumanAge(27, 29))
      .toEqual([2, 3]);
  });
});
