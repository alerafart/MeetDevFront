// Email address verification related actions

export const VERIFY_USER_EMAIL = 'VERIFY_USER_EMAIL';
export const verifyUserEmail = (token) => ({
  type: VERIFY_USER_EMAIL,
  token,
});

export const IS_VERIFIED = 'IS_VERIFIED';
export const isVerified = (verified) => ({
  type: IS_VERIFIED,
  verified,
});

export const RESEND_VERIFICATION = 'RESEND_VERIFICATION';
export const resendVerification = () => ({
  type: RESEND_VERIFICATION,
});
