// ACTION TYPE SEARCH_DEV
export const SEARCH_DEV = 'SEARCH_DEV';
// ACTION CREATOR searchDev
export const searchDev = (value, name) => ({
  type: SEARCH_DEV,
  value,
  name,
});

// ACTION TYPE SAVE_PROFILE
export const SAVE_PROFILE = 'SAVE_PROFILE';
// ACTION CREATOR saveProfile
export const saveProfile = (results) => ({
  type: SAVE_PROFILE,
  results,
});

// ACTION TYPE FETCH_PROFILE_MODALE
export const FETCH_PROFILE_MODALE = 'FETCH_PROFILE_MODALE';
// ACTION CREATOR fetchProfileModale
export const fetchProfileModale = (user, userId) => ({
  type: FETCH_PROFILE_MODALE,
  user,
  userId,
});
