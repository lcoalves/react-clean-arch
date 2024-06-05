import Api from 'clients/api/Api';

import { ExamplePageService } from './ExamplePageService';

jest.mock('clients/api/Api');
jest.mock('services/HostService/HostService', () => ({
  getApiHost: jest.fn().mockImplementation(() => 'http://localhost:7000'),
}));

const MOCKED_ERROR = 'Mocked error';
const MOCKED_MESSAGE = 'Mocked message';

describe('ExamplePageService', () => {
  it('should return accordingly on success', async () => {
    const value = { data: MOCKED_MESSAGE };
    const mockedGet = jest.fn().mockResolvedValue(value);
    Api.get = mockedGet;

    const exampleData = await ExamplePageService.getExampleData();

    expect(exampleData).toEqual(value.data);
  });

  it('should reject on error', async () => {
    const error = { message: MOCKED_ERROR };
    const mockedGet = jest.fn().mockRejectedValue(() => {
      throw error;
    });
    Api.get = mockedGet;

    const exampleData = ExamplePageService.getExampleData;

    await expect(exampleData()).rejects.toThrow();
  });
});
