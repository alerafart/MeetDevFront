import {
  IS_DEV, IS_RECRUITER, LOGIN, LOGOUT,
} from '../actions/settings';

export const initialState = {
  log: {
    logged: false,
    isDevelopper: false,
    isRecruiter: false,
    email: '',
    token: '',
  },
};

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        log: {
          ...state,
          logged: true,
        },
      };
    case LOGOUT:
      return {
        ...state,
        log: {
          ...state,
          logged: false,
          isDevelopper: false,
          isRecruiter: false,
        },
      };
    case IS_DEV:
      return {
        ...state,
        log: {
          ...state,
          isDevelopper: true,
          isRecruiter: false,
        },
      };

    case IS_RECRUITER:
      return {
        ...state,
        log: {
          ...state,
          isDevelopper: false,
          isRecruiter: true,
        },
      };
    default:
      return state;
  }
};

export default settings;
