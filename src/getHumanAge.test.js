'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return array of numbers`, () => {
    const catAgeMock = null;
    const dogAgeMock = null;
    const result = getHumanAge(catAgeMock, dogAgeMock);

    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(2);
    expect(result).toEqual([0, 0]);
  });

  test('should return 0 humanAge if input value less than 15 years', () => {
    const catAgeMock = 14;
    const dogAgeMock = 0;
    const result = getHumanAge(catAgeMock, dogAgeMock);

    expect(result).toHaveLength(2);
    expect(result).toEqual([0, 0]);
  });

  test(`should return 1 humanAge
    if input value between 15 and 23 years`, () => {
    const catAgeMock = 15;
    const dogAgeMock = 16;
    const result = getHumanAge(catAgeMock, dogAgeMock);

    expect(result).toHaveLength(2);
    expect(result).toEqual([1, 1]);
  });

  test(`should test return 2 humanAge
    if input value between 24 and 27 years`, () => {
    const catAgeMock = 24;
    const dogAgeMock = 27;
    const result = getHumanAge(catAgeMock, dogAgeMock);

    expect(result).toHaveLength(2);
    expect(result).toEqual([2, 2]);
  });

  test(`should return one more humanAge
    for every 4 cat years and 5 dog years after 24`, () => {
    const catAgeMock = 32;
    const dogAgeMock = 40;
    const result = getHumanAge(catAgeMock, dogAgeMock);

    expect(result).toHaveLength(2);
    expect(result).toEqual([4, 5]);
  });

  test(`should not duplicate human years for each 15/9 years`, () => {
    const catAgeMock = 100;
    const dogAgeMock = 100;
    const result = getHumanAge(catAgeMock, dogAgeMock);

    expect(result).toHaveLength(2);
    expect(result).toEqual([21, 17]);
  });
});
