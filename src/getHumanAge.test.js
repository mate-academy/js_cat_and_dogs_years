'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);

      test(`should return 0 for cat and dog when
      they are less than 15 years old`, () => {
         expect(getHumanAge(0, 0)).toEqual([0, 0]);
     });
     
       test(`should return 0 for cat and dog when
       they are 14 years old`, () => {
         expect(getHumanAge(14, 14)).toEqual([0, 0]);
       });
     
       test(`should return 1 for cat and dog when
       they are 15 years old`, () => {
         expect(getHumanAge(15, 15)).toEqual([1, 1]);
       });
     
       test(`should return 1 for cat and dog when
       they are 15 years old`, () => {
         expect(getHumanAge(24, 24)).toEqual([1, 1]);
       });
     
       test(`should return 2 for cat and dog when
       they are 24 years old`, () => {
         expect(getHumanAge(25, 25)).toEqual([2, 2]);
       });
      
       test(`should return 2 for cat and dog when
       they are 24 years old`, () => {
         expect(getHumanAge(29, 30)).toEqual([2, 2]);
  });
});
