'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  /* eslint-disable max-len */
  test(`should be zero if the age of the cat and dog is also zero`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should be equal to 0 if the age of the cat and dog is less than 15`, () => {
    expect(getHumanAge(12, 14)).toEqual([0, 0]);
  });

  test(`should be equal to 1 if the age of the cat and dog is 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should be equal to 1 if the age of the cat and dog is less than 24 but more than 15`, () => {
    expect(getHumanAge(18, 21)).toEqual([1, 1]);
  });

  test(`should be equal to 2 if the age of the cat and dog is 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should be equal to 2 if the age of the cat and dog is more than 23 and the age of the cat is less than 28 and the age of the dog is less than 29`, () => {
    expect(getHumanAge(25, 27)).toEqual([2, 2]);
  });

  test(`should be 3 if the age of the cat is 28 and the age of the dog is 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test(`should be 18 and 16 if the age of the cat is 88 and the age of the dog is 96`, () => {
    expect(getHumanAge(88, 96)).toEqual([18, 16]);
  });
  /* eslint-enable max-len */
});
