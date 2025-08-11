'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  // getHumanAge(0, 0) === [0, 0]
  test('should return array of zeros for zeros values', () => {
    const catAge = 0;
    const dogAge = 0;
    const array = getHumanAge(catAge, dogAge);

    const isZeroActualCatAge = array[0] === 0;
    const isZeroActualDogAge = array[1] === 0;

    expect(isZeroActualCatAge && isZeroActualDogAge)
      .toBeTruthy();
  });

  // getHumanAge(14, 14) === [0, 0]
  test(
    'should return array of zeros for values before first human year',
    () => {
      const catAge = 14;
      const dogAge = 14;
      const array = getHumanAge(catAge, dogAge);

      const isZeroActualCatAge = array[0] === 0;
      const isZeroActualDogAge = array[1] === 0;

      expect(isZeroActualCatAge && isZeroActualDogAge)
        .toBeTruthy();
    });

  // getHumanAge(15, 15) === [1, 1]
  test(
    'should return array of 1 for values equal first human',
    () => {
      const catAge = 15;
      const dogAge = 15;
      const array = getHumanAge(catAge, dogAge);

      const isZeroActualCatAge = array[0] === 1;
      const isZeroActualDogAge = array[1] === 1;

      expect(isZeroActualCatAge && isZeroActualDogAge)
        .toBeTruthy();
    });

  // getHumanAge(23, 23) === [1, 1]
  test(
    'should return array of 1 for values before second human year',
    () => {
      const catAge = 23;
      const dogAge = 23;
      const array = getHumanAge(catAge, dogAge);

      const isZeroActualCatAge = array[0] === 1;
      const isZeroActualDogAge = array[1] === 1;

      expect(isZeroActualCatAge && isZeroActualDogAge)
        .toBeTruthy();
    });

  // getHumanAge(24, 24) === [2, 2]
  test(
    'should return array of 2 for values equal second human',
    () => {
      const catAge = 24;
      const dogAge = 24;
      const array = getHumanAge(catAge, dogAge);

      const isZeroActualCatAge = array[0] === 2;
      const isZeroActualDogAge = array[1] === 2;

      expect(isZeroActualCatAge && isZeroActualDogAge)
        .toBeTruthy();
    });

  // getHumanAge(27, 27) === [2, 2]
  test(
    'should return array of 2 for values before third human year',
    () => {
      const catAge = 27;
      const dogAge = 27;
      const array = getHumanAge(catAge, dogAge);

      const isZeroActualCatAge = array[0] === 2;
      const isZeroActualDogAge = array[1] === 2;

      expect(isZeroActualCatAge && isZeroActualDogAge)
        .toBeTruthy();
    });

  // getHumanAge(28, 28) === [3, 2]
  test(
    `should return array of different items for different values before third
    human year`,
    () => {
      const catAge = 28;
      const dogAge = 28;
      const array = getHumanAge(catAge, dogAge);

      const isZeroActualCatAge = array[0] === 3;
      const isZeroActualDogAge = array[1] === 2;

      expect(isZeroActualCatAge && isZeroActualDogAge)
        .toBeTruthy();
    });

  // getHumanAge(100, 100) === [21, 17]
  test(
    'should return correct calculation for big values ',
    () => {
      const catAge = 100;
      const dogAge = 100;
      const array = getHumanAge(catAge, dogAge);

      const isZeroActualCatAge = array[0] === 21;
      const isZeroActualDogAge = array[1] === 17;

      expect(isZeroActualCatAge && isZeroActualDogAge)
        .toBeTruthy();
    });
});
