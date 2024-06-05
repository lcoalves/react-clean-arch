import Api from 'clients/api/Api';

import { LoginService } from './LoginService';

jest.mock('clients/api/Api');
jest.mock('services/HostService/HostService', () => ({
  getApiHost: jest.fn().mockImplementation(() => 'http://localhost:7000'),
}));

const MOCKED_ERROR = 'Mocked error';
const MOCKED_MESSAGE = 'Mocked message';
const MOCKED_BODY = {
  email: 'mocked@email.com',
  password: '123456',
};

describe('LoginService', () => {
  it('should return accordingly on success', async () => {
    const value = { data: MOCKED_MESSAGE };
    const mockedGet = jest.fn().mockResolvedValue(value);
    Api.get = mockedGet;

    const exampleData = await LoginService.getLoginData(MOCKED_BODY);

    expect(exampleData).toEqual(value.data);
  });

  it('should reject on error', async () => {
    const error = { message: MOCKED_ERROR };
    const mockedGet = jest.fn().mockRejectedValue(() => {
      throw error;
    });
    Api.get = mockedGet;

    const { getLoginData } = LoginService;

    await expect(getLoginData(MOCKED_BODY)).rejects.toThrow();
  });
});
