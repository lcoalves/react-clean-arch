import { Common } from './common';

describe('common', () => {
  describe('debounce function', () => {
    it('should call the function after the time', () => {
      const functionMocked = jest.fn();
      jest.useFakeTimers();

      const debounceReturn = Common.debounce(functionMocked, 100);
      debounceReturn();

      expect(functionMocked).toHaveBeenCalledTimes(0);
      jest.runAllTimers();

      expect(functionMocked).toHaveBeenCalledTimes(1);
    });
  });

  describe('camelCase function', () => {
    it('should return string in camelCase', () => {
      const camelCaseReturn = Common.camelCase('Camel case');

      expect(camelCaseReturn).toBe('camelCase');
    });
  });

  describe('random function', () => {
    it('should return a intenger number between 1 and 100', () => {
      const propsMocked = {
        min: 1,
        max: 100,
      };
      const randomReturn = Common.random(propsMocked);

      expect(randomReturn).toBeGreaterThanOrEqual(1);
      expect(randomReturn).toBeLessThanOrEqual(100);
      expect(Number.isInteger(randomReturn)).toBeTruthy();
    });

    it('should return a float number between 0 and 50', () => {
      const propsMocked = {
        max: 50,
        floating: true,
      };

      const randomReturn = Common.random(propsMocked);

      expect(randomReturn).toBeGreaterThanOrEqual(0);
      expect(randomReturn).toBeLessThanOrEqual(50);
      expect(!Number.isInteger(randomReturn)).toBeTruthy();
    });
  });

  describe('round function', () => {
    it('should return a integer number', () => {
      const roundReturn = Common.round(2.4);

      expect(roundReturn).toBe(2);
    });

    it('should return a float number', () => {
      const roundReturn = Common.round(2.23521, 2);

      expect(roundReturn).toBe(2.24);
    });
  });
});
