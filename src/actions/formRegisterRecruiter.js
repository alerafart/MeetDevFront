export const REGISTER_RECRUITER = 'REGISTER_RECRUITER';

export const registerRecruiter = (value, name) => ({
  type: REGISTER_RECRUITER,
  value,
  name,
});

export const REGISTER_RECRUITER_CANCEL = 'REGISTER_RECRUITER_CANCEL';

export const registerRecruiterCancel = () => ({
  type: REGISTER_RECRUITER_CANCEL,
});
