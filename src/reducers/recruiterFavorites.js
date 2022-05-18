import { FAVORITES_LIST } from '../actions/favorites';

export const initialState = {
  favorites: {
    listFavorites: [],
  },
};

const favorites = (state = initialState, action = {}) => {
  switch (action.type) {
    case FAVORITES_LIST: {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          listFavorites: action.data,
        },
      };
    }

    default:
      return state;
  }
};
export default favorites;
