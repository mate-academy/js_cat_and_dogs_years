'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] if ageCat and ageDog equal 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return [0, 0] if ageCat and ageDog are less than 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('Should return [1, 1] if ageCat and ageDog are equsl 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('Should return [1, 1] if ageCat and ageDog are equsl 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('Should return [2, 2] if ageCat and ageDog are equsl 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('Should return [2, 2] if ageCat and ageDog are equsl 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('Should return [3, 2] if ageCat and ageDog are equsl 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should return [21, 17] if ageCat and ageDog are equsl 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
