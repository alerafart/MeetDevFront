import { SEARCH_DEV } from '../actions/formSearchDev';

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

    default:
      return state;
  }
};

export default formSearchDev;
