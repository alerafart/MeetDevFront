export const FAVORITES_LIST = 'FAVORITES_LIST';

export const favoritesList = (data) => ({
  type: FAVORITES_LIST,
  data,
});

export const GET_ONE_FAVORITE = 'GET_ONE_FAVORITE';

export const getOneFavorite = (user) => ({
  type: GET_ONE_FAVORITE,
  user,
});
