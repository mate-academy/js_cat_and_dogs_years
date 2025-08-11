'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if catAge or dogAge equils 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return right result if catAge or dogAge equils 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return right result if catAge or dogAge equils 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return right result if catAge or dogAge equils 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return right result if catAge or dogAge equils 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return right result if catAge or dogAge equils 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return right result if catAge or dogAge equils 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return right result if catAge or dogAge equils 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
