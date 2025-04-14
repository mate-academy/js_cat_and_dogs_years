'use strict';

const getHumanAge = require('./getHumanAge');


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
