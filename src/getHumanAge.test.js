'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('return 0 for until 15 dog\'s and 15 cat\'s years', () => {
    for (let i = 0; i < 15; i++) {
      const result = getHumanAge(i, i);

      expect(result).toEqual([0, 0]);
    }
  });

  test('return 1 for until 23 dog\'s and 23 cat\'s years', () => {
    for (let i = 15; i < 24; i++) {
      const result = getHumanAge(i, i);

      expect(result).toEqual([1, 1]);
    }
  });

  test('return appropriate age after 24', () => {
    for (let i = 24; i < 35; i++) {
      const result = getHumanAge(i, i);

      const dogs = 2 + Math.floor((i - 24) / 5);
      const cats = 2 + Math.floor((i - 24) / 4);

      expect(result).toEqual([cats, dogs]);
    }
  });
});
