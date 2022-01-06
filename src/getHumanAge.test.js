'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('Get human Age should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Get human Age should return an array', () => {
    expect(getHumanAge(25, 25))
      .toBeInstanceOf(Array);
  });

  test('Get human Age should return an array with numbers', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('Get human Age returns 0, 0 if input were a negative number', () => {
    expect(getHumanAge(-1, -2))
      .toEqual([0, 0]);
  });

  test('Get human Age should works only with two numbers', () => {
    expect(getHumanAge(25).length)
      .toEqual(2);
  });

  test('Get human Age should return [0, 0] if inputs < 15', () => {
    expect(getHumanAge(3, 3))
      .toEqual([0, 0]);
  });

  test('Get human Age should return [1, 1] if inputs > 15 && < 24', () => {
    expect(getHumanAge(18, 18))
      .toEqual([1, 1]);
  });

  test('Get human Age should return [1, 1] if inputs are (23, 23)', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('Get human Age should return [2, 2] if inputs are (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('Get human Age should return [2, 2] if inputs > 23 && < 27', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('Get human Age should return [2, 3] if inputs are (27, 29)', () => {
    expect(getHumanAge(27, 29))
      .toEqual([2, 3]);
  });

  test('Get human Age should return [3, 3] if inputs are (28, 31)', () => {
    expect(getHumanAge(28, 31))
      .toEqual([3, 3]);
  });

  test('Get human Age returns [4, 4] if inputs are between 32 && 36', () => {
    expect(getHumanAge(34, 34))
      .toEqual([4, 4]);
  });
});
