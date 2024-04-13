'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if "catAge" & "dogAge" < 15', () => {
    expect(getHumanAge(12, 11))
      .toEqual([0, 0]);
  });

  test('shoud return 1 if 15 => "catAge" & "dogAge" =<23', () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test('returns 2+Math.floor((animAge - 24)/4(for cats), 5(for dogs))', () => {
    expect(getHumanAge(127, 100))
      .toEqual([27, 17]);
  });

  test('returns 2+Math.floor((animAge - 24)/4(for cats), 5(for dogs))', () => {
    expect(getHumanAge(35, 76))
      .toEqual([4, 12]);
  });
});
