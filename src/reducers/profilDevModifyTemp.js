import { COPY_PROFIL_DEV_TO_TEMP, TEMP_MODIF_DEV_PROFIL } from '../actions/profilDevModifyTemp';
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
    case COPY_PROFIL_DEV_TO_TEMP: {
      console.log(action.profilDev);
      return {
        ...state,
        register: {
          ...action.profilDev.register,
        },
      };
    }

    case TEMP_MODIF_DEV_PROFIL: {
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
        register: {
        },
      };

    default:
      return state;
  }
};

export default profilDev;
