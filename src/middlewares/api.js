import axios from 'axios';
import { LOGIN_TEST, TEST_CONNEXION_BACK } from '../actions/middleware';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_TEST: {
      const state = store.getState();
      const { email, password } = state.formLogin.login;
      axios.post(
        'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/users/login',
        // ou url: 'http://localhost/api/users:8000',
        {
          email_address: email,
          password: password,
        },
      )
        .then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error.response.data);
        });
      next(action);
      break;
    }

    case TEST_CONNEXION_BACK: {
      axios({
        method: 'get',
        url: 'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/users',
        // ou url: 'http://localhost/api/users:8000',
      })
        .then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default apiMiddleWare;
