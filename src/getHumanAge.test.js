'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should return 0 for cats and dogs when it is 0 years for humans.',() => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return 0 for cats and dogs when it is 14 years for humans.',() => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('Should return 1 for cats and dogs when it is 15 years for humans.',() => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('Should return 1 for cats and dogs when it is 23 years for humans.',() => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('Should return 2 for cats and dogs when it is 24 years for humans.',() => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('Should return 2 for cats and dogs when it is 27 years for humans.',() => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('Should return 3 for cats and dogs when it is 28 years for humans.',() => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should return 21 for cats and 17 for dogs when it is 100 years for humans.', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
