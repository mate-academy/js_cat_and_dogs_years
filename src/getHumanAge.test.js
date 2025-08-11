'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 human years for cat or dog less than 15 years', () => {
    expect(getHumanAge(10, 15)).toEqual([0, 1]);
  });

  // eslint-disable-next-line max-len
  test('should return 1 human year for cat or dog between 15 and 24 years', () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  // eslint-disable-next-line max-len
  test('should return more than 1 human year for cat or dog over 24 years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
