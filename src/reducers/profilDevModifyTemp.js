// == Import action
import {
  COPY_PROFIL_DEV_TO_TEMP, SELECT_AVATAR_TEMP, TEMP_MODIF_DEV_PROFIL, TOGGLE_STACK_TEMP,
} from '../actions/profilDevModifyTemp';
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

const profilDevModifyTemp = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_STACK_TEMP: {
      // si le name n'est pas dans le tableau des technologies on l'ajoute sinon on le retire
      if (!state.register.technology.includes(action.name)) {
        state.register.technology.push(action.name);
      }
      else if (state.register.technology.includes(action.name)) {
        const index = state.register.technology.indexOf(action.name);
        state.register.technology.splice(index, 1);
      }

      return {
        ...state,
        register: {
          ...state.register,
        },
      };
    }
    case SELECT_AVATAR_TEMP: {
      return {
        ...state,
        register: {
          ...state.register,
          profilePicture: action.profilePicture,
        },
      };
    }
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

export default profilDevModifyTemp;
