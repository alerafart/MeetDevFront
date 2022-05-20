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

// ACTION TYPE SELECT_AVATAR_RECRUITER
export const SELECT_AVATAR_RECRUITER = 'SELECT_AVATAR_RECRUITER';

// ACTION CREATOR selectAvatarRecruiter
export const selectAvatarRecruiter = (profilePicture) => ({
  type: SELECT_AVATAR_RECRUITER,
  profilePicture,
});
