'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('return object', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Object);
  });

  test('should return 0 if age under 15', () => {
    expect(getHumanAge('14', '14'))
      .toStrictEqual([0, 0]);
  });

  test('should return 2 if cat age 24 and dog age 24', () => {
    expect(getHumanAge('24', '24'))
      .toStrictEqual([2, 2]);
  });

  test('should return 3 if cat age 28 and dog age 29', () => {
    expect(getHumanAge('28', '29'))
      .toStrictEqual([3, 3]);
  });

  test('should return 4 if cat age 32 and dog age 34', () => {
    expect(getHumanAge('32', '34'))
      .toStrictEqual([4, 4]);
  });

  test('should return 21, 17 if cat age 100 and dog age 100', () => {
    expect(getHumanAge('100', '100'))
      .toStrictEqual([21, 17]);
  });
});
