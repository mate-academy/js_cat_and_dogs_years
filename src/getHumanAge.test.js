'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Human years should equal to zero if animal years are less than 15',
    () => {
      expect(getHumanAge(14, 14))
        .toEqual([0, 0]);
    });

  test('First 15 animal years should be equal to one human year', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('Between 15 and 23 animal years should be equal to one human year',
    () => {
      expect(getHumanAge(23, 23))
        .toEqual([1, 1]);
    });

  test('24 animal years should be equal to two human years', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('24<=cat years>=27 & 24<=dog years>=28 = 2 human years',
    () => {
      expect(getHumanAge(27, 27))
        .toEqual([2, 2]);
    });

  test('28 cat years = 3 human years; 28 dog years = 2 human years',
    () => {
      expect(getHumanAge(28, 28))
        .toEqual([3, 2]);
    });

  test('15a.y.=1h.y.; next 9a.y.=1h.y.; next 4 cat y. & 5 dog y. = 1 h.y.',
    () => {
      expect(getHumanAge(100, 100))
        .toEqual([21, 17]);
    });
});
