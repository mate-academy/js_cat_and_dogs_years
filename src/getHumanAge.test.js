'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should validate conversion of cat and dog ages to human years', () => {
    const expectedForCats = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
    const expectedForDogs = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
    const inputCats = [0, 1, 14, 15, 16, 23, 24, 25, 27, 28, 29];
    const inputDogs = [0, 1, 14, 15, 16, 23, 24, 25, 28, 29, 30];

    for (let i = 0; i < inputCats.length; i++) {
      const result = getHumanAge(inputCats[i], inputDogs[i]);

      if (result[0] !== expectedForCats[i] 
        || result[1] !== expectedForDogs[i]) {
        console.log(`Test failed for inputCat[${i}]:
         ${inputCats[i]}, inputDog[${i}]: ${inputDogs[i]}`);
      }

      expect(result[0]).toBe(expectedForCats[i]);
      expect(result[1]).toBe(expectedForDogs[i]);
    }
  });
});
