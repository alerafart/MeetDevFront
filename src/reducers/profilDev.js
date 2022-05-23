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
      console.log(action.user);
      return {
        ...state,
        register: {
          ...state.register,
          firstname: action.user.firstname,
          lastname: action.user.lastname,
          age: action.user.age,
          city: action.user.city,
          zipCode: action.user.zip_code,
          departement: action.user.department,
          phone: action.user.phone,
          technology: action.user.languages.split(','),
          experience: action.user.years_of_experience,
          password: action.user.password,
          portfolio: action.user.portfolio_link,
          description: action.user.description,
          available_for_recruiters: action.user.available_for_developers,
          available_for_developers: action.user.available_for_developers,
          github: action.user.github_link,
          salary: action.user.minimum_salary_requested,
          english: action.user.english_spoken,
          availability: action.user.available_for_developers,
          label: action.user.label,
          profilePicture: action.user.profile_picture,
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
