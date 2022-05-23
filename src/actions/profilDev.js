export const DATA_PROFIL_DEV_FROM_API = 'DATA_PROFIL_DEV_FROM_API';

export const dataProfilDevFromApi = (value, name) => ({
  type: DATA_PROFIL_DEV_FROM_API,
  value,
  name,
});

export const MAJ_PROFIL_DEV_FROM_API = 'MAJ_PROFIL_DEV_FROM_API';

export const majProfilDevFromApi = (user) => ({
  type: MAJ_PROFIL_DEV_FROM_API,
  user,
});
