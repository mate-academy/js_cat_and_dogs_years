'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  // Проверка, что функция getHumanAge объявлена
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  // Тесты с использованием данных из JSON
  const testCases = [
    {
      input: {
        catAge: 0, dogAge: 0,
      },
      expected: [0, 0],
    },
    {
      input: {
        catAge: 14, dogAge: 14,
      },
      expected: [0, 0],
    },
    {
      input: {
        catAge: 15, dogAge: 15,
      },
      expected: [1, 1],
    },
    {
      input: {
        catAge: 23, dogAge: 23,
      },
      expected: [1, 1],
    },
    {
      input: {
        catAge: 24, dogAge: 24,
      },
      expected: [2, 2],
    },
    {
      input: {
        catAge: 27, dogAge: 27,
      },
      expected: [2, 2],
    },
    {
      input: {
        catAge: 28, dogAge: 28,
      },
      expected: [3, 2],
    },
    {
      input: {
        catAge: 100, dogAge: 100,
      },
      expected: [21, 17],
    },
  ];

  // Перебор всех тестов
  testCases.forEach(({ input, expected }, index) => {
    test(`should return the correct human age for case #${index + 1}`, () => {
      const result = getHumanAge(input.catAge, input.dogAge);

      expect(result).toEqual(expected);
    });
  });
});
