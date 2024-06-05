import { LoginService } from 'services/LoginService/LoginService';

import { loadLogin, loadLoginDone, loadLoginFail } from 'stores/LoginStore/LoginEvents';

import LoginUseCase from './LoginUseCase';

jest.mock('services/LoginService/LoginPageService');
jest.mock('stores/LoginStore/LoginEvents');

describe('LoginUseCase', () => {
  const errorMock = { message: 'Error', response: { status: 500 } };

  const requestMock = {
    email: 'mocked@email.com',
    password: 'mocked.password',
  };

  const responseMock = {
    id: 'mocked-id',
    email: 'mocked@email.com',
    token: 'mocked.token',
  };

  it('should call loadLogin event on start', async () => {
    LoginService.getLoginData = jest.fn().mockResolvedValue(responseMock);

    await LoginUseCase.execute(requestMock);

    expect(loadLogin).toHaveBeenCalled();
  });

  it('should call loadLoginDone event successfully', async () => {
    LoginService.getLoginData = jest.fn().mockResolvedValue(responseMock);

    await LoginUseCase.execute(requestMock);

    expect(loadLoginDone).toHaveBeenCalled();
    expect(loadLoginDone).toHaveBeenCalledWith(responseMock);
  });

  it('should call loadLoginFail event when getDashboardData request fails', async () => {
    LoginService.getLoginData = jest.fn().mockRejectedValue(errorMock);

    await LoginUseCase.execute(requestMock);

    expect(loadLoginFail).toHaveBeenCalled();
  });
});
