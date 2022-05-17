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
