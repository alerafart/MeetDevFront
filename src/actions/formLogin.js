// ACTION TYPE LOGIN
export const LOGIN = 'LOGIN';
// ACTION CREATOR login
export const login = (value, name) => ({
  type: LOGIN,
  value,
  name,
});

// ACTION TYPE LOGIN_CANCEL
export const LOGIN_CANCEL = 'LOGIN_CANCEL';
// ACTION CREATOR loginCancel
export const loginCancel = () => ({
  type: LOGIN_CANCEL,
});
