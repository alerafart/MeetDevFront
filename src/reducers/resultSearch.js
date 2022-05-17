import { SAVE_PROFILE } from '../actions/formSearchDev';

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
    default:
      return state;
  }
};

export default resultSearch;
