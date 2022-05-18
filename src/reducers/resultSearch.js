import { SAVE_PROFILE } from '../actions/formSearchDev';
import { LOGOUT } from '../actions/settings';

export const initialState = {
  results: [],
};

const resultSearch = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFILE: {
      return {
        ...state,
        results: action.results,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        results: [],
      };
    }
    default:
      return state;
  }
};

export default resultSearch;
