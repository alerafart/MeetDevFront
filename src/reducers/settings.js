import {
  IS_DEV, IS_RECRUITER, LOGIN, LOGOUT, TOGGLE_WINDOW_LOG,
} from '../actions/settings';

export const initialState = {
  log: {
    logged: false,
    isDev: false,
    isRecruiter: false,
    email: '',
    token: '',
    windowLog: false,
  },
};

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_WINDOW_LOG:
      return {
        ...state,
        log: {
          ...state.log,
          windowLog: !state.log.windowLog,
        },
      };
    case LOGIN:
      return {
        ...state,
        log: {
          ...state.log,
          logged: true,
        },
      };
    case LOGOUT:
      return {
        ...state,
        log: {
          ...state.log,
          logged: false,
          isDev: false,
          isRecruiter: false,
        },
      };
    case IS_DEV:
      return {
        ...state,
        log: {
          ...state.log,
          isDev: true,
          isRecruiter: false,
        },
      };

    case IS_RECRUITER:
      return {
        ...state,
        log: {
          ...state.log,
          isDev: false,
          isRecruiter: true,
        },
      };
    default:
      return state;
  }
};

export default settings;
