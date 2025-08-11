'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array with 2 elements', () => {
    expect(getHumanAge(15, 19)).toHaveLength(2);
  });

  test('should return 0 if cat`s years < 15', () => {
    expect(getHumanAge(-14, 10)[0]).toBe(0);
    expect(getHumanAge(0, 10)[0]).toBe(0);
    expect(getHumanAge(14, 10)[0]).toBe(0);
  });

  test('should return 0 if dog`s years < 15', () => {
    expect(getHumanAge(10, -14)[1]).toBe(0);
    expect(getHumanAge(10, 0)[1]).toBe(0);
    expect(getHumanAge(10, 14)[1]).toBe(0);
  });

  test('should return 1 if cat`s years >= 15 and < 24', () => {
    expect(getHumanAge(20, 10)[0]).toBe(1);
  });

  test('should return 1 if dog`s years > 15 and < 24', () => {
    expect(getHumanAge(10, 20)[1]).toBe(1);
  });

  test('should return correct result if cat`s years >= 24', () => {
    expect(getHumanAge(24, 10)[0]).toBe(2);
    expect(getHumanAge(28, 10)[0]).toBe(3);
    expect(getHumanAge(100, 10)[0]).toBe(21);
  });

  test('should return correct result if dog`s years >= 24', () => {
    expect(getHumanAge(10, 24)[1]).toBe(2);
    expect(getHumanAge(10, 28)[1]).toBe(2);
    expect(getHumanAge(10, 100)[1]).toBe(17);
  });

  test('should return correct result if cat`s years is floating number', () => {
    expect(getHumanAge(10.3, 10)[0]).toBe(0);
    expect(getHumanAge(23.99, 10)[0]).toBe(1);
  });

  test('should return correct result if dog`s years is floating number', () => {
    expect(getHumanAge(10, 10.3)[1]).toBe(0);
    expect(getHumanAge(10, 23.99)[1]).toBe(1);
  });
});
