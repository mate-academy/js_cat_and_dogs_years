'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    expect(getHumanAge(0, 0))
      .toBeInstanceOf(Array);
  });

  test(`should return an array of 0 and 0`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([
        0, 0,
      ]);
  });

  test(`should return an array of 14 and 14`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([
        0, 0,
      ]);
  });

  test(`should return an array of 15 and 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([
        1, 1,
      ]);
  });

  test(`should return an array of 23 and 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([
        1, 1,
      ]);
  });

  test(`should return an array of 24 and 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([
        2, 2,
      ]);
  });

  test(`should return an array of 27 and 27`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([
        2, 2,
      ]);
  });

  test(`should return an array of 28 and 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([
        3, 2,
      ]);
  });

  test(`should return an array of 100 and 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([
        21, 17,
      ]);
  });
});
