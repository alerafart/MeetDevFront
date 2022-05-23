import { DATA_PROFIL_RECRUITER_FROM_API, MAJ_PROFIL_RECRUITER_FROM_API } from '../actions/profilRecruiter';
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
    password: '',
    verifyemail: '',
    verifypassword: '',
    profilePicture: '',
    description: '',
    availability: '',
  },

};

const profilRecruiter = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_PROFIL_RECRUITER_FROM_API: {
      return {
        ...state,
        register: {
          ...state.register,
          [action.name]: action.value,
        },
      };
    }
    case MAJ_PROFIL_RECRUITER_FROM_API: {
      console.log(action.user);
      return {
        ...state,
        register: {
          ...state.register,
          firstname: action.user.firstname,
          lastname: action.user.lastname,
          firms: action.user.firms,
          city: action.user.city,
          department: action.user.department,
          zipCode: action.user.zipCode,
          phone: action.user.phone,
          website: action.user.website,
          profilePicture: action.user.profilePicture,
          description: action.user.description,
          availability: action.user.availability,
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

export default profilRecruiter;
