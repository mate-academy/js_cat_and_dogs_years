'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(1, 1))
      .toBeInstanceOf(Array);
  });

  test('should return an array of the correct length', () => {
    expect(getHumanAge(1, 1))
      .toHaveLength(2);
  });

  test(`should give 0s if animals are almost 1 human year old`, () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test(`should give 1s if animals are exactly 1 human year old`, () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test(`should give 1s if animals are almost 2 human years old`, () => {
    expect(getHumanAge(20, 22))
      .toStrictEqual([1, 1]);
  });

  test(`should give 2s if animals are exactly 2 human years old`, () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test(`should work if cat and dog are between 24 and 28 years old`, () => {
    expect(getHumanAge(27, 25))
      .toStrictEqual([2, 2]);
  });

  test(`should work if cat and dog are 28 years old`, () => {
    expect(getHumanAge(28, 28))
      .toStrictEqual([3, 2]);
  });

  test(`should work if cat is 28 years old and dog is 29 years old`, () => {
    expect(getHumanAge(28, 29))
      .toStrictEqual([3, 3]);
  });

  test(`should work if cat and dog very old`, () => {
    expect(getHumanAge(999999, 999999))
      .toStrictEqual([249995, 199997]);
  });
});
