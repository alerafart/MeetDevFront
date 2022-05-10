import { SEND_MESSAGE } from '../actions/formContact';

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

    default:
      return state;
  }
};

export default formContact;
