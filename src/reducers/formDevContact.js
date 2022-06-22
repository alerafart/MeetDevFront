// == Import action
import { CONTACT_DEV, CONTACT_DEV_RAZ } from '../actions/formDevContact';
import { LOGOUT } from '../actions/settings';

export const initialState = {
  formContact: {
    title: '',
    message: '',
  },

};

const formDevContact = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONTACT_DEV: {
      return {
        ...state,
        formContact: {
          ...state.formContact,
          [action.name]: action.value,
        },
      };
    }
    case CONTACT_DEV_RAZ: {
      return {
        ...state,
        formContact: {
          title: '',
          message: '',
        },
      };
    }
    case LOGOUT:
      return {
        ...state,
        formContact: {
          title: '',
          message: '',
        },
      };

    default:
      return state;
  }
};

export default formDevContact;
