'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return 0 when age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return an array', () => {
    expect(getHumanAge(20, 20)).toBeInstanceOf(Array);
  });

  test('should return 1 when age is 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 0 when age is <15', () => {
    expect(getHumanAge(12, 12)).toEqual([0, 0]);
  });

  test('should return 1 when cat age is >=15 and <24', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 when cat age is >=24 and <28', () => {
        expect(getHumanAge(27, 15)).toEqual([2, 1]);
  });
  
  test('should return 3 when cat age is 28', () => {
    expect(getHumanAge(28, 15)).toEqual([3, 1]);
  });

  test('should return 4 when cat age is 29', () => {
     expect(getHumanAge(29, 16)).toEqual([3, 1]);
  });

  test('should return 1 when dog age <=15', () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  test('should return 2 when dog age is >15 and <23', () => {
    expect(getHumanAge(16, 25)).toEqual([1, 2]);
  });

  test('should return 3 when dog age is between 25 and 30', () => {
    expect(getHumanAge(26, 28)).toEqual([1, 3]);
  });

  test('should return 4 when dog age is >=30', () => {
    expect(getHumanAge(26, 30)).toEqual([1, 4]);
  });
});







