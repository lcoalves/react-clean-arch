/* eslint-disable no-console */
import Api from 'clients/api/Api';

import { LoginParams, LoginValue } from 'domains/login';

const getLoginData = async ({ email, password }: LoginParams): Promise<LoginValue> => {
  return Api.post({
    url: '/auth',
    body: {
      email,
      password,
    },
  })
    .then(response => {
      console.log({ response });
      return response.data;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

export const LoginService = {
  getLoginData,
};
