'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('Zero case', () => {
    const getHumanAgeZero = getHumanAge(0, 0);

    expect(getHumanAgeZero).toEqual([0, 0]);
  });

  test('Lower zero boundary values', () => {
    const getHumanAgeZero = getHumanAge(14, 14);

    expect(getHumanAgeZero).toEqual([0, 0]);
  });

  test('Lower one boundary values', () => {
    const getHumanAgeZero = getHumanAge(15, 15);

    expect(getHumanAgeZero).toEqual([1, 1]);
  });

  test('Upper one boundary values', () => {
    const getHumanAgeZero = getHumanAge(23, 23);

    expect(getHumanAgeZero).toEqual([1, 1]);
  });

  test('Lower two boundary values', () => {
    const getHumanAgeZero = getHumanAge(24, 24);

    expect(getHumanAgeZero).toEqual([2, 2]);
  });

  test('Upper two boundary values', () => {
    const getHumanAgeZero = getHumanAge(27, 27);

    expect(getHumanAgeZero).toEqual([2, 2]);
  });

  test('Different boundaries values', () => {
    const getHumanAgeZero = getHumanAge(28, 28);

    expect(getHumanAgeZero).toEqual([3, 2]);
  });

  test('Input 100 testing', () => {
    const getHumanAgeZero = getHumanAge(27, 27);

    expect(getHumanAgeZero).toEqual([2, 2]);
  });
});
