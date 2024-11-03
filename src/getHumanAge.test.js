'use strict';

describe('getHumanAge', () => {
  const catAge = -28; // the value of my cat's age
  const dogAge = 27.5; // the value of my dogs's age

  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('values must be integers', () => {
    const result = getHumanAge(catAge, dogAge);
    const tempResult = [];

    for (const ch of result) {
      if (Number.isInteger(ch)) {
        tempResult.push(ch);
      }
    }

    expect(result).toEqual(tempResult);
  });

  test('result must be an array', () => {
    const result = getHumanAge(catAge, dogAge);

    expect(result).toBeInstanceOf(Array);
  });

  test('should convert years correctly', () => {
    const result = getHumanAge(catAge, dogAge);

    const getCountCatAge = catAge >= 24
      ? 2 + Math.floor((catAge - 24) / 4)
      : catAge >= 15 ? 1 : 0;
    const getCountDogAge = dogAge >= 24
      ? 2 + Math.floor((dogAge - 24) / 5)
      : dogAge >= 15 ? 1 : 0;

    expect(result).toEqual([getCountCatAge, getCountDogAge]);
  });
});
