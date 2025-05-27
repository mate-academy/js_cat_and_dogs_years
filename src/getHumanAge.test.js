'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if cat and dog age less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('first 15 dog or cat years should give 1 human year', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`the next 9 cat or dogs years after the first 15 years
  should give 1 more`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`every 4 next cat years after first
  15 years and 9 years should give 1 extra human year`, () => {
    expect(getHumanAge(28, 27)).toEqual([3, 2]);
  });

  test(`every 5 next dog years after
  first 15 years and 9 years should give 1 extra human year`, () => {
    expect(getHumanAge(28, 30)).toEqual([3, 3]);
  });
});
