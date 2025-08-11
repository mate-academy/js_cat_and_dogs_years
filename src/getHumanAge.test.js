'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(2, 2))
      .toBeInstanceOf(Array);
  });

  test('should return an array of zeros if cat and dog years are 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('first 15 cat and dog years should equal to 1 human year', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('every next 9 years should give 1 more human year', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('every 4 next cat years give 1 extra human year', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('every 5 next dog years give 1 extra human year', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return proper values for absurd numbers', () => {
    expect(getHumanAge(1000, 1000))
      .toEqual([246, 197]);
  });
});
