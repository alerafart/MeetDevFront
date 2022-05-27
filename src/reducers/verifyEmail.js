import { IS_VERIFIED, HAS_SLUG } from '../actions/verifiedEmail';

export const initialState = {
  emailVerified: false,
  slug: false,
};

const verifyEmail = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_VERIFIED: {
      return {
        ...state,
        emailVerified: action.verified,
      };
    }
    case HAS_SLUG: {
      return {
        ...state,
        slug: action.slug,
      };
    }
    default:
      return state;
  }
};

export default verifyEmail;
