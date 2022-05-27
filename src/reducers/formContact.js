// == Import action
import { SEND_MESSAGE } from '../actions/formContact';
import { LOGOUT } from '../actions/settings';

export const initialState = {
  message: {
    firstname: '',
    lastname: '',
    mail: '',
    subject: '',
    content: '',
  },

};

const formContact = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        message: {
          ...state.message,
          [action.name]: action.value,
        },
      };
    }

    case LOGOUT:
      return {
        ...state,
        message: {
          firstname: '',
          lastname: '',
          mail: '',
          subject: '',
          content: '',
        },
      };
    default:
      return state;
  }
};

export default formContact;
