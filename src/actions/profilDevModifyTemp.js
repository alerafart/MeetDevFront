export const COPY_PROFIL_DEV_TO_TEMP = 'COPY_PROFIL_DEV_TO_TEMP';

export const copyProfilDevToTemp = (profilDev) => ({
  type: COPY_PROFIL_DEV_TO_TEMP,
  profilDev,
});

export const TEMP_MODIF_DEV_PROFIL = 'TEMP_MODIF_DEV_PROFIL';

export const tempModifDevProfil = (value, name) => ({
  type: TEMP_MODIF_DEV_PROFIL,
  value,
  name,
});

// ACTION TYPE TOGGLE_SEARCH_CITY_DISPLAY
export const TOGGLE_STACK_TEMP = 'TOGGLE_STACK_TEMP';

// ACTION CREATOR toggleWindowLog
export const toggleStackTemp = (name) => ({
  type: TOGGLE_STACK_TEMP,
  name,
});

// ACTION TYPE TOGGLE_SEARCH_CITY_DISPLAY
export const SELECT_AVATAR_TEMP = 'SELECT_AVATAR_TEMP';

// ACTION CREATOR toggleWindowLog
export const selectAvatarTemp = (profilePicture) => ({
  type: SELECT_AVATAR_TEMP,
  profilePicture,
});
