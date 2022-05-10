import { REGISTER_RECRUITER } from '../actions/formRegisterRecruiter';

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

    default:
      return state;
  }
};

export default formRegisterRecruiter;
