import Api from './Api';

describe('API', () => {
  describe('get', () => {
    it('should method return an error ', async () => {
      expect(Api.get({ url: '/not-found' })).rejects.toThrow();
    });
  });

  describe('post', () => {
    it('should method return an error ', async () => {
      expect(Api.post({ url: '/not-found' })).rejects.toThrow();
    });
  });

  describe('put', () => {
    it('should method return an error ', async () => {
      expect(Api.put({ url: '/not-found' })).rejects.toThrow();
    });
  });

  describe('delete', () => {
    it('should method return an error ', async () => {
      expect(Api.delete({ url: '/not-found' })).rejects.toThrow();
    });
  });
});
