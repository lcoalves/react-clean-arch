import { loadLogin, loadLoginDone, loadLoginFail } from './LoginEvents';
import LoginStore from './LoginStore';

describe('LoginStore', () => {
  it('should change value of isLoading when loadLogin is called', () => {
    loadLogin();
    expect(LoginStore.getState().isLoading).toEqual(true);
  });

  it('should change values when loadLoginDone is called', () => {
    loadLoginDone({ id: 'example-id', email: 'example@email.com', token: 'example.token' });
    expect(LoginStore.getState().isLoading).toEqual(false);
  });

  it('should change value of isLoading when loadLoginFail is called', () => {
    loadLoginFail();
    expect(LoginStore.getState().isLoading).toEqual(false);
  });
});
