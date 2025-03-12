'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  // Тест 1: Вік 0 для кота і собаки
  test('повертає [0, 0] для catAge=0 і dogAge=0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  // Тест 2: Вік 14 для кота і собаки (менше 15)
  test('повертає [0, 0] для catAge=14 і dogAge=14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  // Тест 3: Вік 15 для кота і собаки (перший поріг)
  test('повертає [1, 1] для catAge=15 і dogAge=15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  // Тест 4: Вік 23 для кота і собаки (ще не 24)
  test('повертає [1, 1] для catAge=23 і dogAge=23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  // Тест 5: Вік 24 для кота і собаки (другий поріг)
  test('повертає [2, 2] для catAge=24 і dogAge=24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  // Тест 6: Вік 27 для кота і собаки (ще не 28 для кота)
  test('повертає [2, 2] для catAge=27 і dogAge=27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  // Тест 7: Вік 28 для кота і собаки (третій поріг для кота)
  test('повертає [3, 2] для catAge=28 і dogAge=28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  // Тест 8: Вік 100 для кота і собаки (велике число)
  test('повертає [21, 17] для catAge=100 і dogAge=100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
