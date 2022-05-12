import { DATA_PROFIL_RECRUITER_FROM_API } from '../actions/profilRecruiter';
import { LOGOUT } from '../actions/settings';

export const initialState = {
  register: {
    status: '',
    firstname: '',
    lastname: '',
    firms: '',
    city: '',
    phone: '',
    website: '',
    email: '',
    password: '',
    verifypassword: '',
  },

};

const profilRecruiter = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_PROFIL_RECRUITER_FROM_API: {
      return {
        ...state,
        register: {
          ...state.register,
          [action.name]: action.value,
        },
      };
    }
    case LOGOUT:
      return {
        ...state,
        status: '',
        firstname: '',
        lastname: '',
        firms: '',
        city: '',
        phone: '',
        website: '',
        email: '',
        password: '',
        verifypassword: '',
      };

    default:
      return state;
  }
};

export default profilRecruiter;
