/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if catAge and dogAge are 0', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return 0 if catAge and dogAge less then 15', () => {
    const result = getHumanAge(14, 14);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return 1 if catAge and dogAge are from 15 to 23', () => {
    const result = getHumanAge(23, 19);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should add 1 more year for every 4 next cat years and for every 5 next dog years', () => {
    const result = getHumanAge(28, 28);

    expect(result)
      .toEqual([3, 2]);
  });
});
