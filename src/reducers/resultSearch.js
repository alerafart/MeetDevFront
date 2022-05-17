import { FETCH_PROFILE_MODALE, SAVE_PROFILE } from '../actions/formSearchDev';

export const initialState = {
  results: [],
  modale: {
    city: '',
    dev_id: '',
    firstname: '',
    languages: '',
    lastname: '',
    profile_picture: '',
    recrut_id: '',
    years_of_experience: '',
  },
};

const resultSearch = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFILE: {
      return {
        ...state,
        results: action.results,
      };
    }
    case FETCH_PROFILE_MODALE: {
      return {
        ...state,
        modale: {
          [action.name]: action.value,
        },
      };
    }
    default:
      return state;
  }
};

export default resultSearch;
