'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be 1 human year for first 15 years of cat and dog', () => {
    expect(getHumanAge(14, 13)).toEqual([0, 0]);
  });

  test('should be 1 human year for first 15 years of cat and dog', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should add 1 human year between 15 and 24 cats and dogs years', () => {
    expect(getHumanAge(17, 17)).toEqual([1, 1]);
  });

  test('should add 1 human year between 15 and 24 cats and dogs years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(
    `should add 1 extra year for every 4 cats and every 
    5 dogs years from 24 years old`,
    () => {
      expect(getHumanAge(27, 27)).toEqual([2, 2]);
    });

  test(
    `should add 1 extra year for every 4 cats and every 
    5 dogs years from 24 years old`,
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });

  test(
    `should add 1 extra year for every 4 cats and every 
    5 dogs years from 24 years old`,
    () => {
      expect(getHumanAge(100, 100)).toEqual([21, 17]);
    });
});
