import { DATA_PROFIL_DEV_FROM_API, MAJ_PROFIL_DEV_FROM_API } from '../actions/profilDev';
import { LOGOUT } from '../actions/settings';

export const initialState = {
  register: {
    firstname: '',
    lastname: '',
    age: '',
    email: '',
    emailTest: '',
    city: '',
    zipCode: '',
    departement: '',
    phone: '',
    technology: [],
    experience: '',
    password: '',
    verifypassword: '',
    portfolio: '',
    description: '',
    available_for_recruiters: '',
    available_for_developers: '',
    github: '',
    salary: '',
    english: '',
    availability: '',
    label: '',
    profilePicture: '',
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

    case MAJ_PROFIL_DEV_FROM_API: {
      console.log(action.data);
      return {
        ...state,
        ...action.data,
      };
    }

    case LOGOUT:
      return {
        ...state,
        register: {
          firstname: '',
          lastname: '',
          age: '',
          email: '',
          emailTest: '',
          city: '',
          zipCode: '',
          departement: '',
          phone: '',
          technology: [],
          experience: '',
          password: '',
          verifypassword: '',
          portfolio: '',
          description: '',
          available_for_recruiters: '',
          available_for_developers: '',
          github: '',
          salary: '',
          english: '',
          availability: '',
          label: '',
          profilePicture: '',
        },
      };

    default:
      return state;
  }
};

export default profilDev;
