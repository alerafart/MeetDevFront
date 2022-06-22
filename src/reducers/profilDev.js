// == Import action
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
      // console.log(action.user);
      return {
        ...state,
        register: {
          ...state.register,
          firstname: action.user.firstname,
          lastname: action.user.lastname,
          age: action.user.age,
          city: action.user.city,
          zipCode: action.user.zipCode,
          departement: action.user.departement,
          phone: action.user.phone,
          // technology: action.user.languages.split(','),
          technology: action.user.technology,
          experience: action.user.experience,
          portfolio: action.user.portfolio,
          description: action.user.description,
          available_for_recruiters: action.user.availability,
          available_for_developers: action.user.availability,
          github: action.user.github,
          salary: action.user.salary,
          english: action.user.english,
          availability: action.user.availability,
          label: action.user.label,
          profilePicture: action.user.profilePicture,
        },
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
