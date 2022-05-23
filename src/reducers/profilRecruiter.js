import { DATA_PROFIL_RECRUITER_FROM_API, MAJ_PROFIL_REC_FROM_API } from '../actions/profilRecruiter';
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
    case MAJ_PROFIL_REC_FROM_API: {
      console.log(action.user);
      return {
        ...state,
        register: {
          ...state.register,
          firstname: action.user.firstname,
          lastname: action.user.lastname,
          firms: action.user.company_name,
          city: action.user.city,
          department: action.user.department,
          zipCode: action.user.zip_code,
          phone: action.user.phone,
          website: action.user.web_site_link,
          password: action.user.password,
          profilePicture: action.user.profile_picture,
          description: action.needs_description,
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
