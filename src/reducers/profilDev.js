import { DATA_PROFIL_DEV_FROM_API } from '../actions/profilDev';

export const initialState = {
  register: {
    firstname: '',
    lastname: '',
    age: '',
    mail: '',
    city: '',
    zip_code: '',
    phone: '',
    technology: '',
    experience: '',
    password: '',
    verifypassword: '',
    portfolio_link: '',
    available_for_recruiters: '',
    available_for_developers: '',
    github: '',
    languages: '',
    salary: '',
    english: '',
    availability: '',
    gender: '',
  },

};

const profilDev = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_PROFIL_DEV_FROM_API: {
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

export default profilDev;
