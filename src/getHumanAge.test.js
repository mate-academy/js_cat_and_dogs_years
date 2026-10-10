'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('first 15 cat and dog years gives 1 human year', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  })

  test('the next 8 cat and dog years gives 0 more human year', () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test('the next 9 cat and dog years gives 1 more human year', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test('every 4 next cat years give 1 extra human year', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('every 5 next dog years give 1 extra human year', () => {
    const result = getHumanAge(28, 29);

    expect(result).toEqual([3, 3]);
  });
});
