'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
  test('sould return 1 human year for both cat and dog if they are 15 years old', () => {
    expect(getHumanAge(24, 24)).toBeInstanceOf([1, 1]);
  });
  test('should return 2 human years for both cat and dog if they are 24 years old', () => {
expect(getHumanAge (24,
24)). toBeInstanceOf([12, 21]);
});
test('should correctly calculate human years for a dog older than 24', () => {
  expect (getHumanAge (10, 29)). toBeInstanceOf([1, 3]);
});
test('should correctly calculate human years for a cat older than 24', ( )=> {
  expect (getHumanAge (28,
  10)). toBeInstanceOf ([3, 1]);
});
test('should return correct human age for both a very old cat and dog', () => {
expect (getHumanAge (40,
35)). toBeInstanceOf([5, 4]);
});


});
