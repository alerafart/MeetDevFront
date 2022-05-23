// ACTION TYPE DATA_PROFIL_DEV_FROM_API
export const DATA_PROFIL_DEV_FROM_API = 'DATA_PROFIL_DEV_FROM_API';
// ACTION CREATOR dataProfilDevFromApi
export const dataProfilDevFromApi = (value, name) => ({
  type: DATA_PROFIL_DEV_FROM_API,
  value,
  name,
});

// ACTION TYPE MAJ_PROFIL_DEV_FROM_API
export const MAJ_PROFIL_DEV_FROM_API = 'MAJ_PROFIL_DEV_FROM_API';
// ACTION CREATOR majProfilDevFromApi
export const majProfilDevFromApi = (user) => ({
  type: MAJ_PROFIL_DEV_FROM_API,
  user,
});
