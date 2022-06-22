import {
  REGISTER_DEV, SELECT_AVATAR, TOGGLE_STACK, FORM_ERROR_ON_SUBMIT,
} from '../actions/formRegisterDev';

import { LOGOUT } from '../actions/settings';

export const initialState = {
  register: {
    firstname: '',
    lastname: '',
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
    github: '',
    salary: '',
    age: '',
    english: '',
    // label is for exemple: Developper Front-end React
    label: '',
    // description is a little description of the developper (or citation)
    description: '',
    availability: '',
    profilePicture: '',
  },
  //
  error: {
    firstnameEmpty: undefined,
    lastnameEmpty: undefined,
    emailEmpty: undefined,
    emailTestEmpty: undefined,
    cityEmpty: undefined,
    phoneEmpty: undefined,
    // technology: undefined,
    experienceEmpty: undefined,
    passwordEmpty: undefined,
    verifyPasswordEmpty: undefined,
    salaryEmpty: undefined,
    englishEmpty: undefined,
    labelEmpty: undefined,
    descriptionEmpty: undefined,
    // availability: false,
  },

};

const formRegisterDev = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_STACK: {
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

    case SELECT_AVATAR: {
      return {
        ...state,
        register: {
          ...state.register,
          profilePicture: action.profilePicture,
        },
      };
    }
    // update this state for controlled field from inscription form
    case REGISTER_DEV: {
      // console.log(action.name, action.value);
      return {
        ...state,
        register: {
          ...state.register,
          [action.name]: action.value,
        },
      };
    }
    // raz state when logout
    case LOGOUT:
      return {
        ...state,
        register: {
          firstname: '',
          lastname: '',
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
          github: '',
          salary: '',
          age: '',
          english: '',
          // label is for exemple: Developper Front-end React
          label: '',
          // description is a little description of the developper (or citation)
          description: '',
          availability: '',
          profilePicture: '',
        },
      };

    case FORM_ERROR_ON_SUBMIT: {
      return {
        ...state,
        error: {
          ...state.error,
          [action.name]: action.value,
        },
      };
    }

    default:
      return state;
  }
};

export default formRegisterDev;
