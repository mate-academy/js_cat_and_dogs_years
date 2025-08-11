'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros when given zeros', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return zeros when not enough years for whole human year', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test("should convert if animal's years enough to full human year", () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);

    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);

    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return integer when not enough years for convertation', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);

    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should correctly convert when input is an arbitray integer', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
