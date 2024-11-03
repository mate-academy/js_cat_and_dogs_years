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

    if (catAge < 15 && dogAge < 15) {
      expect(result).toEqual([0, 0]);
    };

    if (catAge < 15 && dogAge >= 15 && dogAge < 24) {
      expect(result).toEqual([0, 1]);
    };

    if (catAge < 15 && dogAge >= 24) {
      const countAge = 2 + Math.floor((dogAge - 24) / 5);

      expect(result).toEqual([0, countAge]);
    };

    if (catAge >= 15 && catAge < 24 && dogAge < 15) {
      expect(result).toEqual([1, 0]);
    };

    if (catAge >= 15 && catAge < 24 && dogAge >= 15 && dogAge < 24) {
      expect(result).toEqual([1, 1]);
    };

    if (catAge >= 15 && catAge < 24 && dogAge >= 24) {
      const countDogAge = 2 + Math.floor((dogAge - 24) / 5);

      expect(result).toEqual([1, countDogAge]);
    };

    if (catAge >= 24 && dogAge < 15) {
      const conutCatAge = 2 + Math.floor((catAge - 24) / 4);

      expect(result).toEqual([conutCatAge, 0]);
    };

    if (catAge >= 24 && dogAge >= 15 && dogAge < 24) {
      const conutCatAge = 2 + Math.floor((catAge - 24) / 4);

      expect(result).toEqual([conutCatAge, 1]);
    };

    if (catAge >= 24 && dogAge >= 24) {
      const conutCatAge = 2 + Math.floor((catAge - 24) / 4);
      const countDogAge = 2 + Math.floor((dogAge - 24) / 5);

      expect(result).toEqual([conutCatAge, countDogAge]);
    };
  });
});
