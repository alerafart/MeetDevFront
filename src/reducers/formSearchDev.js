// == Import action
import { SEARCH_DEV } from '../actions/formSearchDev';
import { LOGOUT } from '../actions/settings';

export const initialState = {
  search: {
    city: '',
    technology: '',
    experience: '',
    availability: '',
  },

};

const formSearchDev = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_DEV: {
      return {
        ...state,
        search: {
          ...state.search,
          [action.name]: action.value,
        },
      };
    }

    case LOGOUT:
      return {
        ...state,
        search: {
          city: '',
          technology: '',
          experience: '',
          availability: '',
        },
      };

    default:
      return state;
  }
};

export default formSearchDev;
