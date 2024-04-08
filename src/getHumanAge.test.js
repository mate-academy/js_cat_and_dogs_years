'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should correctly convert cat and dog ages to human ages', () => {
    expect(getHumanAge(0, 0)).toStrictEqual([0, 0]);
    });

  test('should convert first year correctly for cats and dogs (15, 15)', () => {
    expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);
    });

  test('should return [1, 1] just before pets reach their second human-equivalent year (23, 23)', () => {
    expect(getHumanAge(23, 23)).toStrictEqual([1, 1]);
    });

  test('should correctly convert the second year for cats and dogs (24, 24)', () => {
    expect(getHumanAge(24, 24)).toStrictEqual([2, 2]);
    });

  test('should return [2, 2] just before pets reach their third human-equivalent year (27, 27)', () => {
    expect(getHumanAge(27, 27)).toStrictEqual([2, 2]);
     });

  test('should show different conversion rates starting the third year for cats and dogs (28, 28)', () => {
    expect(getHumanAge(28, 28)).toStrictEqual([3, 2]);
    });

  test('should correctly convert larger cat and dog ages to human ages (100, 100)', () => {
    expect(getHumanAge(100, 100)).toStrictEqual([21, 17]);
  });
});
