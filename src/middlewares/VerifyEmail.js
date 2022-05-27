import axios from 'axios';
import { toggleWindowLogOn } from '../actions/settings';
import { isVerified, RESEND_VERIFICATION, VERIFY_USER_EMAIL } from '../actions/verifiedEmail';

const verifiedEmail = (store) => (next) => (action) => {
  switch (action.type) {
    case VERIFY_USER_EMAIL: {
      console.log('arrive dans middleware verify email');
      const tok = action.token;
      const params = {
        token: tok,
      };
      console.log(tok);
      const url = 'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/email/verify';

      axios.post(url, params)
        .then((response) => {
          console.log(response.data);
          const requestStatus = response.data.status;

          // if (requestStatus === 'success' && requestStatus === 200) {
          if (requestStatus !== 401) {
            store.dispatch(isVerified(true));
            store.dispatch(toggleWindowLogOn());
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
