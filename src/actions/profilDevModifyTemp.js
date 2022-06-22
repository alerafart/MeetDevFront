// ACTION TYPE COPY_PROFIL_DEV_TO_TEMP
export const COPY_PROFIL_DEV_TO_TEMP = 'COPY_PROFIL_DEV_TO_TEMP';
// ACTION CREATOR copyProfilDevToTemp
export const copyProfilDevToTemp = (profilDev) => ({
  type: COPY_PROFIL_DEV_TO_TEMP,
  profilDev,
});

// ACTION TYPE TEMP_MODIF_DEV_PROFIL
export const TEMP_MODIF_DEV_PROFIL = 'TEMP_MODIF_DEV_PROFIL';
// ACTION CREATOR tempModifDevProfil
export const tempModifDevProfil = (value, name) => ({
  type: TEMP_MODIF_DEV_PROFIL,
  value,
  name,
});

// ACTION TYPE TOGGLE_STACK_TEMP
export const TOGGLE_STACK_TEMP = 'TOGGLE_STACK_TEMP';
// ACTION CREATOR toggleStackTemp
export const toggleStackTemp = (name) => ({
  type: TOGGLE_STACK_TEMP,
  name,
});

// ACTION TYPE SELECT_AVATAR_TEMP
export const SELECT_AVATAR_TEMP = 'SELECT_AVATAR_TEMP';
// ACTION CREATOR selectAvatarTemp
export const selectAvatarTemp = (profilePicture) => ({
  type: SELECT_AVATAR_TEMP,
  profilePicture,
});
