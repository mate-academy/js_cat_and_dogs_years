'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be declared', () => {
    expect(getHumanAge(10, 10))
      .toEqual([0, 0]);
  });

  test('You have one year`s age cat and dog', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('The input is zero', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('You have one years cat and two years dog', () => {
    expect(getHumanAge(16, 24))
      .toEqual([1, 2]);
  });

  test('You have veryyy old pets', () => {
    expect(getHumanAge(100, 140))
      .toEqual([21, 25]);
  });

  test('You have a cat only', () => {
    expect(getHumanAge(15, null))
      .toEqual([1, 0]);
  });

  test('You have a dog only', () => {
    expect(getHumanAge(null, 15))
      .toEqual([0, 1]);
  });

  test('You haven`t any pets', () => {
    expect(getHumanAge(null, null))
      .toEqual([0, 0]);
  });

  test('Input negative values', () => {
    expect(getHumanAge(-5, -30))
      .toEqual([0, 0]);
  });
});
