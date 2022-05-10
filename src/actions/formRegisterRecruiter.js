export const REGISTER_RECRUITER = 'REGISTER_RECRUITER';

export const registerRecruiter = (value, name) => ({
  type: REGISTER_RECRUITER,
  value,
  name,
});
