// ACTION TYPE LOGIN

export const LOGIN = 'LOGIN';

// ACTION CREATOR LOGIN
export const login = () => ({
  type: LOGIN,
});

// ACTION TYPE IS_DEV

export const IS_DEV = 'IS_DEV';

// ACTION CREATOR IS_DEV
export const isDev = () => ({
  type: IS_DEV,
});

// ACTION TYPE IS_RECRUITER
export const IS_RECRUITER = 'IS_RECRUITER';

// ACTION CREATOR IS_RECRUITER
export const isRecruiter = () => ({
  type: IS_RECRUITER,
});

// ACTION TYPE LOGOUT
export const LOGOUT = 'LOGOUT';

// ACTION CREATOR logout
export const logout = () => ({
  type: LOGOUT,
});

// ACTION TYPE TOGGLE_WINDOW_LOG
export const TOGGLE_WINDOW_LOG = 'TOGGLE_WINDOW_LOG';

// ACTION CREATOR toggleWindowLog
export const toggleWindowLog = () => ({
  type: TOGGLE_WINDOW_LOG,
});
