export const COPY_PROFIL_REC_TO_TEMP = 'COPY_PROFIL_REC_TO_TEMP';

export const copyProfilRecToTemp = (profilRec) => ({
  type: COPY_PROFIL_REC_TO_TEMP,
  profilRec,
});

export const TEMP_MODIF_REC_PROFIL = 'TEMP_MODIF_DEV_PROFIL';

export const tempModifRecProfil = (value, name) => ({
  type: TEMP_MODIF_REC_PROFIL,
  value,
  name,
});

// ACTION TYPE SELECT_AVATAR_TEMP_RECRUITER
export const SELECT_AVATAR_TEMP_RECRUITER = 'SELECT_AVATAR_TEMP_RECRUITER';

// ACTION CREATOR selectAvatarTempRecruiter
export const selectAvatarTempRecruiter = (profilePicture) => ({
  type: SELECT_AVATAR_TEMP_RECRUITER,
  profilePicture,
});
