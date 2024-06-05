import { ExamplePageService } from 'services/ExampleService/ExamplePageService';

import { loadExample, loadExampleDone, loadExampleFail } from 'stores/ExampleStore/ExampleEvents';

import LoadExamplePageUseCase from './LoadExamplePageUseCase';

jest.mock('services/ExampleService/ExamplePageService');
jest.mock('stores/ExampleStore/ExampleEvents');

describe('LoadExamplePageUseCase', () => {
  const errorMock = { message: 'Error', response: { status: 500 } };

  const exampleResponseMock = {
    title: 'Example title',
    description: 'Example description',
  };

  it('should call loadExample event on start', async () => {
    ExamplePageService.getExampleData = jest.fn().mockResolvedValue(exampleResponseMock);

    await LoadExamplePageUseCase.execute();

    expect(loadExample).toHaveBeenCalled();
  });

  it('should call loadExampleDone event successfully', async () => {
    ExamplePageService.getExampleData = jest.fn().mockResolvedValue(exampleResponseMock);

    await LoadExamplePageUseCase.execute();

    expect(loadExampleDone).toHaveBeenCalled();
    expect(loadExampleDone).toHaveBeenCalledWith(exampleResponseMock);
  });

  it('should call loadExampleFail event when getDashboardData request fails', async () => {
    ExamplePageService.getExampleData = jest.fn().mockRejectedValue(errorMock);

    await LoadExamplePageUseCase.execute();

    expect(loadExampleFail).toHaveBeenCalled();
  });
});
