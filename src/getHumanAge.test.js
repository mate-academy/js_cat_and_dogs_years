'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    expect(getHumanAge(16, 16))
      .toBeInstanceOf(Array);
  });

  test(`should return two elements in the array`, () => {
    expect(getHumanAge(14, 14))
      .toHaveLength(2);
  });

  test(`shoud return 0 if cat and dog are 0 year old`, () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test(`shoud return 0 if cat and dog are < 15 years old`, () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test(`shoud return 1 if cat and dog are 15 years old`, () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test(`shoud return 1 if cat and dog are 23 years old`, () => {
    expect(getHumanAge(23, 23))
      .toStrictEqual([1, 1]);
  });

  test(`shoud return 2 if cat and dog are 24 years old`, () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test(`shoud return [2, 2] if cat and dog are 27 years old`, () => {
    expect(getHumanAge(27, 27))
      .toStrictEqual([2, 2]);
  });

  test(`shoud return [3, 2] if cat and dog are 28 years old`, () => {
    expect(getHumanAge(28, 28))
      .toStrictEqual([3, 2]);
  });

  test(`shoud return [21, 27] if cat and dog are 100 years old`, () => {
    expect(getHumanAge(100, 100))
      .toStrictEqual([21, 17]);
  });

  test(`should return [0, 3] if cat is 14 years old 
  and dog is 30 years old`, () => {
    expect(getHumanAge(14, 30))
      .toStrictEqual([0, 3]);
  });
});

describe('convertToHuman', () => {
  const { convertToHuman } = require('./getHumanAge');

  test('should be declared', () => {
    expect(convertToHuman)
      .toBeInstanceOf(Function);
  });

  test(`should return whole number`, () => {
    const humanAge = convertToHuman(100, 15, 9, 4);

    expect(humanAge)
      .toBe(21);
  });
});
