'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('Should return [0, 0] if ages < 15', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);

    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('Should return [1, 1] if 14 < ages < 24', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);

    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('Should increase cat years by 1 every 4 years after 24 years', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);

    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);

    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('Should increase dog years by 1 every 4 years after 24 years', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);

    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
