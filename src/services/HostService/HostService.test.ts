import * as HostService from './HostService';

describe('HostService', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    // @ts-ignore
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  describe('getCategoryServiceHost', () => {
    it('should return the DEV categoryService host', () => {
      // @ts-ignore
      process.env.NODE_ENV = 'development';
      process.env.REACT_APP_API_HOST = 'the-host';

      const result = HostService.getApiHost();

      expect(result).toBe('the-host');
    });

    // it("should return the PROD categoryService host", () => {
    //   // @ts-ignore
    //   process.env.NODE_ENV = "production";

    //   const result = HostService.getApiHost();

    //   expect(result).toBe("");
    // });
  });
});
