import { createStore } from 'effector';

import { loadLogin, loadLoginDone, loadLoginFail } from './LoginEvents';
import { LoginState } from './LoginState';

const initialState: LoginState = {
  isLoading: false,
  id: null,
  email: null,
  token: null,
};

const LoginStore = createStore<LoginState>(initialState)
  .on(loadLogin, state => ({
    ...state,
    isLoading: true,
  }))
  .on(loadLoginDone, (_, data) => ({
    isLoading: false,
    id: data.id,
    email: data.email,
    token: data.token,
  }))
  .on(loadLoginFail, state => ({
    ...state,
    isLoading: false,
  }));

export default LoginStore;
