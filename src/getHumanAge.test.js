'use strict';

const getHumanAge = require('./getHumanAge');

it('should be return 0 for cat and dog when they are less 15', () => {
    expect(getHumanAge(14, 14)).toBe(0, 0);
});

it('should return 1 for cat and dog when 15-23', () => {
   expect(getHumanAge(15, 15)).toBe(1, 1);
});

it('should return 2 for cat when 24-28 ', () => {
    expect(getHumanAge(24, 24)).toBe(2, 2);
});

it('should return 2 for cat when 24-28 ', () => {
    expect(getHumanAge(28, 28)).toBe(2, 2);
});
 
it('should return 2 for dog when 25-28 ', () => {
    expect(getHumanAge(25, 25)).toBe(2, 2);
});
  
it('should return 2 for dog when 25-28 ', () => {
    expect(getHumanAge(25, 25)).toBe(2, 2);
});