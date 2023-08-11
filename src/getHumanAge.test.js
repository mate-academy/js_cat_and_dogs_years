'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 human years when'
  + 'dogs and cats years are equal 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 human years when'
  + 'dogs and cats years are equal 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 human year when'
  + 'dogs and cats years are equal 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 human year when'
  + 'dogs and cats years are equal 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 human years when'
  + 'dogs and cats years are equal 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 human years when'
  + 'dogs and cats years are equal 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return 3 human years when cats years are equal 28'
  + 'should return 2 human years when dogs years are equal 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return 21 human years when cats years are equal 100'
  + 'should return 17 human years when dogs years are equal 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
