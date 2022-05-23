// import { DATA_PROFIL_RECRUITER_FROM_API } from '../actions/profilRecruiter';

import { FAVORITES_LIST } from '../actions/favoritesaction';
import { LOGOUT } from '../actions/settings';

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
    case LOGOUT: {
      return {
        ...state,
        favorites: {
          listFavorites: [],
        },
      };
    }

    default:
      return state;
  }
};
export default favorites;
