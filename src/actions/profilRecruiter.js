export const DATA_PROFIL_RECRUITER_FROM_API = 'DATA_PROFIL_RECRUITER_FROM_API';

export const dataProfilRecruiterFromApi = (value, name) => ({
  type: DATA_PROFIL_RECRUITER_FROM_API,
  value,
  name,
});

export const MAJ_PROFIL_RECRUITER_FROM_API = 'MAJ_PROFIL_RECRUITER_FROM_API';

export const majProfilRecruiterFromApi = (user) => ({
  type: MAJ_PROFIL_RECRUITER_FROM_API,
  user,
});
