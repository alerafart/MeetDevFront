import { COPY_PROFIL_REC_TO_TEMP, TEMP_MODIF_REC_PROFIL } from '../actions/profilRecModifyTemp';
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

const profilRecruiterModifyTemp = (state = initialState, action = {}) => {
  switch (action.type) {
    case COPY_PROFIL_REC_TO_TEMP: {
      console.log(action.profilRec);
      return {
        ...state,
        register: {
          ...action.profilRec.register,
        },
      };
    }

    case TEMP_MODIF_REC_PROFIL: {
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

    default:
      return state;
  }
};

export default profilRecruiterModifyTemp;
