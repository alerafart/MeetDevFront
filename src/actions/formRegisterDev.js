export const REGISTER_DEV = 'REGISTER_DEV';

export const registerDev = (value, name) => ({
  type: REGISTER_DEV,
  value,
  name,
});

// ACTION TYPE TOGGLE_SEARCH_CITY_DISPLAY
export const SELECT_AVATAR = 'SELECT_AVATAR';

// ACTION CREATOR toggleWindowLog
export const selectAvatar = (profilePicture) => ({
  type: SELECT_AVATAR,
  profilePicture,
});

// ACTION TYPE TOGGLE_SEARCH_CITY_DISPLAY
export const TOGGLE_STACK = 'TOGGLE_STACK';

// ACTION CREATOR toggleWindowLog
export const toggleStack = (name) => ({
  type: TOGGLE_STACK,
  name,
});
