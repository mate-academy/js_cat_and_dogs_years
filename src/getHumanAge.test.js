'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('Both cat and dog are 15 years old', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('Both cat and dog are 24 years old', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('Both cat and dog are 28 years old', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Both cat and dog are 27 years old', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });
});
