'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should show 0 human years when animal is 0 years old', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('Should show 0 human years when animal is 14 and less years old', () => {
    expect(getHumanAge(13, 13))
      .toEqual([0, 0]);
  });

  test('Should show 1 human years when animal is 15 years old', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('Should show 1 human years when animal is 16 years old', () => {
    expect(getHumanAge(15, 16))
      .toEqual([1, 1]);
  });

  test('Should show 1 human years when animal is 15-23 years old', () => {
    expect(getHumanAge(20, 23))
      .toEqual([1, 1]);
  });

  test('Should show 2 human years when animal is 24 years old', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('Should show 2 human years when animal is 24-27 years old', () => {
    expect(getHumanAge(26, 27))
      .toEqual([2, 2]);
  });

  test('Should show 2 and 3 human years when animal is 28 years old', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('Should show 3 human years when animal is 29 years old', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test('Should show the 32 cat years is 4 human year and 34 dog', () => {
    expect(getHumanAge(32, 34))
      .toEqual([4, 4]);
  });

  test('Should show the 64 cat years is 12 human year and 92 dog', () => {
    expect(getHumanAge(64, 92))
      .toEqual([12, 15]);
  });
});
