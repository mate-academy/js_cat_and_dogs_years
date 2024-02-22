'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('shold give correct human age if age cat and dog equal 0 less than 16', () => {
    expect(getHumanAge(0, 0)).toEqual([1, 1]);
  });

  test('shold give correct human age if age cat and dog less than 16', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('shold give correct human age if age cat and dog more than 15, but less than 25', () => {
    expect(getHumanAge(16, 16)).toEqual([2, 2]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('shold give correct human age if age cat and dog equal 25', () => {
    expect(getHumanAge(25, 25)).toEqual([3, 3])
  });

  test('should give correct human age if age cat and dog more than 25', () => {
    expect(getHumanAge(40, 40).toEqual([6, 5]));
  });
});
