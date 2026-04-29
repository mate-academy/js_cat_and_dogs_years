'use strict';

const catThirdFactor = 4;
const dogThirdFactor = 5;

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 1 for both cat and dog age >= 15 and age <= 23', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 0 for negative age', () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });

  test('should return 3 and 2 for age = 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should not change progression step after 24 years', () => {
    const baseAge = 2; // first 15 + 9 = 2 human years

    for (let i = 1; i <= 5; i++) {
      const targetHumanAge = baseAge + i;

      expect(
        getHumanAge(24 + catThirdFactor * i, 24 + dogThirdFactor * i),
      ).toEqual([targetHumanAge, targetHumanAge]);
    }
  });

  // eslint-disable-next-line max-len
  test('should diverge ages between cat and dog after 27 years for equal steps', () => {
    const baseAge = 27;

    for (let i = 1; i <= 5; i++) {
      const age = baseAge + i * dogThirdFactor;
      const [catAge, dogAge] = getHumanAge(age, age);

      expect(catAge).not.toEqual(dogAge);
    }
  });
});
