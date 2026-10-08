'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('if catAge && dogAge equal 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('if catAge && dogAge less 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('if catAge && dogAge equal 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('if catAge && dogAge equal 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('if catAge && dogAge equal 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('if catAge && dogAge equal 27', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('if catAge && dogAge equal 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('if catAge && dogAge equal 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
