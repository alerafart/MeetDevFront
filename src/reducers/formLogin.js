import { LOGIN, LOGIN_CANCEL } from '../actions/formLogin';
import { LOGOUT } from '../actions/settings';

export const initialState = {
  login: {
    email: '',
    password: '',
    saveMe: false,
  },

};

const formLogin = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN: {
      // if action.name = saveMe is return value is always on
      // because the checkBox return only "on" each clic
      // We need to assign true or false at the state login.saveMe
      if (action.name === 'saveMe') {
        action.value = !state.login.saveMe;
      }

      return {
        ...state,
        login: {
          ...state.login,
          [action.name]: action.value,
        },
      };
    }
    case LOGIN_CANCEL: {
      return {
        ...state,
        login: {
          ...state.login,
          email: '',
          password: '',
          saveMe: false,
        },
      };
    }

    case LOGOUT:
      return {
        ...state,
        login: {
          email: '',
          password: '',
          saveMe: false,
        },
      };

    default:
      return state;
  }
};

export default formLogin;
