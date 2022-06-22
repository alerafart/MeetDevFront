// ACTION TYPE FAVORITES_LIST
export const FAVORITES_LIST = 'FAVORITES_LIST';
// ACTION CREATOR favoritesList
export const favoritesList = (data) => ({
  type: FAVORITES_LIST,
  data,
});
// ACTION TYPE GET_ONE_FAVORITE
export const GET_ONE_FAVORITE = 'GET_ONE_FAVORITE';
// ACTION CREATOR getOneFavorite
export const getOneFavorite = (user) => ({
  type: GET_ONE_FAVORITE,
  user,
});
