'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  describe('getHumanAge', () => {
    test('should be declared', () => {
      expect(getHumanAge).toBeInstanceOf(Function);
    });

    describe('Conversion from Cat Years to Human Years', () => {
      test('should correctly convert 0 cat years', () => {
        expect(getHumanAge(0, 0)).toEqual([0, 0]);
      });

      test('should correctly convert 14 cat years', () => {
        expect(getHumanAge(14, 0)).toEqual([0, 0]);
      });

      test('should correctly convert 15 cat years', () => {
        expect(getHumanAge(15, 0)).toEqual([1, 0]);
      });

      test('should correctly convert 24 cat years', () => {
        expect(getHumanAge(24, 0)).toEqual([2, 0]);
      });

      test('should correctly convert 27 cat years', () => {
        expect(getHumanAge(27, 0)).toEqual([2, 0]);
      });

      test('should correctly convert 28 cat years', () => {
        expect(getHumanAge(28, 0)).toEqual([3, 0]);
      });

      test('should correctly convert 100 cat years', () => {
        expect(getHumanAge(100, 0)).toEqual([21, 0]);
      });
    });

    describe('Conversion from Dog Years to Human Years', () => {
      test('should correctly convert 0 dog years', () => {
        expect(getHumanAge(0, 0)).toEqual([0, 0]);
      });

      test('should correctly convert 14 dog years', () => {
        expect(getHumanAge(0, 14)).toEqual([0, 0]);
      });

      test('should correctly convert 15 dog years', () => {
        expect(getHumanAge(0, 15)).toEqual([0, 1]);
      });

      test('should correctly convert 24 dog years', () => {
        expect(getHumanAge(0, 24)).toEqual([0, 2]);
      });

      test('should correctly convert 27 dog years', () => {
        expect(getHumanAge(0, 27)).toEqual([0, 2]);
      });

      test('should correctly convert 28 dog years', () => {
        expect(getHumanAge(0, 28)).toEqual([0, 2]);
      });

      test('should correctly convert 100 dog years', () => {
        expect(getHumanAge(0, 100)).toEqual([0, 17]);
      });
    });

    describe('Handling Ages Greater than Specified Thresholds', () => {
      test('should handle 30 cat years and 0 dog years', () => {
        expect(getHumanAge(30, 0)).toEqual([3, 0]);
      });

      test('should handle 0 cat years and 30 dog years', () => {
        expect(getHumanAge(0, 30)).toEqual([0, 3]);
      });

      test('should handle 30 cat years and 30 dog years', () => {
        expect(getHumanAge(30, 30)).toEqual([3, 3]);
      });
    });

    describe('Handling Negative Ages', () => {
      test('should handle negative cat and dog ages', () => {
        expect(getHumanAge(-10, -10)).toEqual([0, 0]);
      });

      test('should handle negative cat age and positive dog age', () => {
        expect(getHumanAge(-10, 10)).toEqual([0, 0]);
      });

      test('should handle positive cat age and negative dog age', () => {
        expect(getHumanAge(10, -10)).toEqual([0, 0]);
      });
    });
  });
});
