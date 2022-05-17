import { REGISTER_RECRUITER, REGISTER_RECRUITER_CANCEL } from '../actions/formRegisterRecruiter';
import { LOGOUT } from '../actions/settings';

export const initialState = {
  register: {
    status: '',
    firstname: '',
    lastname: '',
    firms: '',
    city: '',
    department: '',
    zipCode: '',
    phone: '',
    website: '',
    email: '',
    verifyemail: '',
    password: '',
    verifypassword: '',
    profilePicture: '',
    description: '',
    availability: '',
  },

};

const formRegisterRecruiter = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_RECRUITER: {
      return {
        ...state,
        register: {
          ...state.register,
          [action.name]: action.value,
        },
      };
    }
    case REGISTER_RECRUITER_CANCEL: {
      return {
        ...state,
        register: {
          ...state.register,
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
    }

    case LOGOUT:
      return {
        ...state,
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

    default:
      return state;
  }
};

export default formRegisterRecruiter;
