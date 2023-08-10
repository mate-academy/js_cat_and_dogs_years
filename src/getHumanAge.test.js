'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  // з точки зору еквівалентних класів,
  // цей і наступний тести збігаються,
  // але я все одно вирішила відокремити цей випадок
  test(`should return zeros if parametrs are zeros`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return zeros if parametrs < 15`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`if parametrs = 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`if parametrs = 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`if parametrs = 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`if parametrs = 27`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`if catAge = 28 and dogAge = 29`, () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(`if parametrs = 41`, () => {
    expect(getHumanAge(41, 41)) // +щоб перевірити чи відкидаємо остачу
      .toEqual([6, 5]);
  });
});
