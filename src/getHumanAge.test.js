'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});
/*
firs equal class less that 15 years for cats and dogs
second is 15
third is more that 15 bt less that 24
*/

test(`if cat years < 15 = 0 years like human...if dog years <15 so its 0 human year`, () => {
  expect(getHumanAge(10, 14)) .toEqual([0, 0]);
})

test(`if cat years =15 its 1 years like human...if dog years =15 so its 1 human year`, () => {
  expect(getHumanAge(15, 15)) .toEqual([1, 1]);
})

test(`if cat years >15 but less that 24 its 1 years like human...if dog years>15 
but less that 24 so its 1 human year`, () => {
  expect(getHumanAge(20, 17)) .toEqual([1, 1]);
})

/*
firs equal class  24 years for cats and dogs
second is 27 for cats and 28 for dogs
third is 28 cats and 29 dogs
*/
test(`if cat years =24 its 1+1 years like human...if dog years =24 so its 2 human year`, () => {
  expect(getHumanAge(24, 24)) .toEqual([2, 2]);
})

test(`if cat years 27 its 2 years like human...if dog years 28 so its 2 human year`, () => {
  expect(getHumanAge(27, 28)) .toEqual([2, 2]);
})

test(`if cat years 28 its 3 years like human...if dog years 29 so its 3 human year`, () => {
  expect(getHumanAge(28, 29)) .toEqual([3, 3]);
})

test('should be 21, 17 in case of 100, 100', () => {
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});