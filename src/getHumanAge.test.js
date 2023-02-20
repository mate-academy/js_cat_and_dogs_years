'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  // getHumanAge(0, 0) === [0, 0]
  test('zeros return array of zeros', () => {
    const catAge = 0;
    const dogAge = 0;
    const array = getHumanAge(catAge, dogAge);

    const isZeroActualCatAge = array[0] === 0;
    const isZeroActualDogAge = array[1] === 0;
    const expected = true;

    expect(isZeroActualCatAge && isZeroActualDogAge)
      .toBe(expected);
  });

  // getHumanAge(14, 14) === [0, 0]
  test('values before first human year return array of zeros', () => {
    const catAge = 14;
    const dogAge = 14;
    const array = getHumanAge(catAge, dogAge);

    const isZeroActualCatAge = array[0] === 0;
    const isZeroActualDogAge = array[1] === 0;
    const expected = true;

    expect(isZeroActualCatAge && isZeroActualDogAge)
      .toBe(expected);
  });

  // getHumanAge(15, 15) === [1, 1]
  test('values equal first human year return array of 1', () => {
    const catAge = 15;
    const dogAge = 15;
    const array = getHumanAge(catAge, dogAge);

    const isZeroActualCatAge = array[0] === 1;
    const isZeroActualDogAge = array[1] === 1;
    const expected = true;

    expect(isZeroActualCatAge && isZeroActualDogAge)
      .toBe(expected);
  });

  // getHumanAge(23, 23) === [1, 1]
  test('values before second human year return array of 1', () => {
    const catAge = 23;
    const dogAge = 23;
    const array = getHumanAge(catAge, dogAge);

    const isZeroActualCatAge = array[0] === 1;
    const isZeroActualDogAge = array[1] === 1;
    const expected = true;

    expect(isZeroActualCatAge && isZeroActualDogAge)
      .toBe(expected);
  });

  // getHumanAge(24, 24) === [2, 2]
  test('values equal second human year return array of 2', () => {
    const catAge = 24;
    const dogAge = 24;
    const array = getHumanAge(catAge, dogAge);

    const isZeroActualCatAge = array[0] === 2;
    const isZeroActualDogAge = array[1] === 2;
    const expected = true;

    expect(isZeroActualCatAge && isZeroActualDogAge)
      .toBe(expected);
  });

  // getHumanAge(27, 27) === [2, 2]
  test('values before third human year return array of 2', () => {
    const catAge = 27;
    const dogAge = 27;
    const array = getHumanAge(catAge, dogAge);

    const isZeroActualCatAge = array[0] === 2;
    const isZeroActualDogAge = array[1] === 2;
    const expected = true;

    expect(isZeroActualCatAge && isZeroActualDogAge)
      .toBe(expected);
  });

  // getHumanAge(28, 28) === [3, 2]
  test(
    'different values before third human year return array of different values',
    () => {
      const catAge = 28;
      const dogAge = 28;
      const array = getHumanAge(catAge, dogAge);

      const isZeroActualCatAge = array[0] === 3;
      const isZeroActualDogAge = array[1] === 2;
      const expected = true;

      expect(isZeroActualCatAge && isZeroActualDogAge)
        .toBe(expected);
    });

  // getHumanAge(100, 100) === [21, 17]
  test(
    'correct calculation for big values ',
    () => {
      const catAge = 100;
      const dogAge = 100;
      const array = getHumanAge(catAge, dogAge);

      const isZeroActualCatAge = array[0] === 21;
      const isZeroActualDogAge = array[1] === 17;
      const expected = true;

      expect(isZeroActualCatAge && isZeroActualDogAge)
        .toBe(expected);
    });

});
