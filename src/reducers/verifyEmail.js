import { IS_VERIFIED } from '../actions/verifiedEmail';

export const initialState = {
  emailVerified: false,
};

const verifyEmail = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_VERIFIED: {
      return {
        ...state,
        emailVerified: action.verified,
      };
    }
    default:
      return state;
  }
};

export default verifyEmail;
