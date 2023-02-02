'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if input is 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [0,0] if input is (10,10)', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should return [0,0] if input is (14,14)', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1,1] if input is (15,15)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1,1] if input is (20,20)', () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  test('should return [1,1] if input is (23,23)', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2,2] if input is (24,24)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3,2] if input is (28,28)', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [3,3] if input is (29,29)', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should return [2,2] if input is (24,24)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [0,1] if input is (0,15)', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('should return [1,0] if input is (15,0)', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });
});
