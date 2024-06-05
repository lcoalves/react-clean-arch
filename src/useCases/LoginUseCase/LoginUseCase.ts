/* eslint-disable @typescript-eslint/no-shadow */
import { LoginService } from 'services/LoginService/LoginService';

import { loadLogin, loadLoginDone, loadLoginFail } from 'stores/LoginStore/LoginEvents';

import { LoginParams, LoginValue } from 'domains/login';

const execute = async ({ email, password }: LoginParams): Promise<void> => {
  const errorCallback = () => {
    loadLoginFail();
  };

  loadLogin();

  return LoginService.getLoginData({ email, password })
    .then(({ id, email, token }: LoginValue) => {
      console.log({ id, email, token });
      loadLoginDone({ id, email, token });
    })
    .catch(errorCallback);
};

const LoginUseCase = {
  execute,
};

export default LoginUseCase;
