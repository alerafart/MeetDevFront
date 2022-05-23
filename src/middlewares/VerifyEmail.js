import axios from 'axios';
import { isVerified, RESEND_VERIFICATION, VERIFY_USER_EMAIL } from '../actions/verifiedEmail';

const verifiedEmail = (store) => (next) => (action) => {
  switch (action.type) {
    case VERIFY_USER_EMAIL: {
      const tok = action.token;
      const params = {
        token: tok,
      };
      console.log(tok);
      const url = 'http://localhost:8080/api/email/verify';

      axios.post(url, params)
        .then((response) => {
          console.log(response.data);
          const requestStatus = response.data.status;

          // if (requestStatus === 'success' && requestStatus === 200) {
          if (requestStatus !== 401) {
            store.dispatch(isVerified(true));
          }
        }).catch((error) => {
          console.log(error.response);
        });
      next(action);
      break;
    }

    case RESEND_VERIFICATION: {
      axios.post('http://localhost:8080/email/request-verification')
        .then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error.response);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default verifiedEmail;
