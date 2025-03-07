'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should be 0 if entered 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('1 equivalence class: age less than 15', () => {
    expect(getHumanAge(6, 6)).toEqual([0, 0]);
  });

  test('2 equivalence class: age between 15 and 23', () => {
    expect(getHumanAge(18, 18)).toEqual([1, 1]);
  });

  test('3 equivalence class: 24 years and older', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('boundary value: 14 years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('boundary value: 15 years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('boundary value: 23 years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('boundary value: 24 years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });
});
