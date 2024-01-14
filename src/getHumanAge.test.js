'use strict';

const { getHumanAge,
  CATS_YEARS_MAP,
  DOGS_YEARS_MAP } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 when age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test.each([
    [CATS_YEARS_MAP[0] - 1, DOGS_YEARS_MAP[0] - 1, [0, 0]],
    [CATS_YEARS_MAP[0], DOGS_YEARS_MAP[0], [1, 1]],
    [
      CATS_YEARS_MAP[0] + CATS_YEARS_MAP[1] - 1,
      DOGS_YEARS_MAP[0] + DOGS_YEARS_MAP[1] - 1,
      [1, 1],
    ],
    [
      CATS_YEARS_MAP[0] + CATS_YEARS_MAP[1],
      DOGS_YEARS_MAP[0] + DOGS_YEARS_MAP[1],
      [2, 2],
    ],
    [
      CATS_YEARS_MAP[0] + CATS_YEARS_MAP[1] + CATS_YEARS_MAP[2] - 1,
      DOGS_YEARS_MAP[0] + DOGS_YEARS_MAP[1] + DOGS_YEARS_MAP[2] - 1,
      [2, 2],
    ],
    [
      CATS_YEARS_MAP[0] + CATS_YEARS_MAP[1] + CATS_YEARS_MAP[2],
      DOGS_YEARS_MAP[0] + DOGS_YEARS_MAP[1] + DOGS_YEARS_MAP[2],
      [3, 3],
    ],
    [
      CATS_YEARS_MAP[0] + CATS_YEARS_MAP[1] + CATS_YEARS_MAP[2] * 2,
      DOGS_YEARS_MAP[0] + DOGS_YEARS_MAP[1] + DOGS_YEARS_MAP[2] * 2,
      [4, 4],
    ],
    [
      CATS_YEARS_MAP[0] + CATS_YEARS_MAP[1] + CATS_YEARS_MAP[2] * 2.5,
      DOGS_YEARS_MAP[0] + DOGS_YEARS_MAP[1] + DOGS_YEARS_MAP[2] * 2.5,
      [4, 4],
    ],
    [
      CATS_YEARS_MAP[0] + CATS_YEARS_MAP[1] + CATS_YEARS_MAP[2] * 15.5,
      DOGS_YEARS_MAP[0] + DOGS_YEARS_MAP[1] + DOGS_YEARS_MAP[2] * 15.5,
      [17, 17],
    ],
  ])(
    'when catAge is %j and dogAge is %j should return %j',
    (catAge, dogAge, expected) =>
      expect(getHumanAge(catAge, dogAge)).toEqual(expected)
  );
});
