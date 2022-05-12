import { REGISTER_DEV } from '../actions/formRegisterDev';

export const initialState = {
  register: {
    firstname: '',
    lastname: '',
    age: '',
    email: '',
    city: '',
    phone: '',
    technology: '',
    experience: '',
    password: '',
    verifypassword: '',
    portfolio: '',
    github: '',
    languages: '',
    salary: '',
    english: '',
    availability: '',
    gender: '',
  },

};

const formRegisterDev = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_DEV: {
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

export default formRegisterDev;
