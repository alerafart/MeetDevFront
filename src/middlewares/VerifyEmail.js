import axios from 'axios';
import { toggleWindowLogOn } from '../actions/settings';
import { isVerified, RESEND_VERIFICATION, VERIFY_USER_EMAIL } from '../actions/verifiedEmail';
/*
    permet de récupérer dans la variable d'environnement (.env)
    l'url du serveur selon que l'on soit en production ou en dévelopment.
  */
let baseUrl;
if (process.env.NODE_ENV === 'development') {
  // console.log(process.env.REACT_APP_PUBLIC_DEV_URL);
  baseUrl = process.env.REACT_APP_PUBLIC_DEV_URL;
}
else if (process.env.NODE_ENV === 'production') {
  // console.log(process.env.REACT_APP_PUBLIC_PROD_URL);
  baseUrl = process.env.REACT_APP_PUBLIC_PROD_URL;
}

const verifiedEmail = (store) => (next) => (action) => {
  switch (action.type) {
    case VERIFY_USER_EMAIL: {
      // console.log('arrive dans middleware verify email');
      const tok = action.token;
      const params = {
        token: tok,
      };
      // console.log(tok);
      const url = `${baseUrl}/api/email/verify`;

      axios.post(url, params)
        .then((response) => {
          // console.log(response.data);
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
        .then(() => {
          // console.log(response.data);
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
