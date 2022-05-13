export const LOGIN = 'LOGIN';

export const login = (value, name) => ({
  type: LOGIN,
  value,
  name,
});

export const LOGIN_CANCEL = 'LOGIN_CANCEL';

export const loginCancel = () => ({
  type: LOGIN_CANCEL,
});
