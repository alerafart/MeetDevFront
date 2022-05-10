import axios from 'axios';
import { TEST_CONNEXION_BACK } from '../actions/middleware';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    // on traite l'action de type FETCH_RECIPES
    // dispatchée depuis le composant principal
    case TEST_CONNEXION_BACK: {
      axios({
        method: 'get',
        url: 'http://127.0.0.1/api/users:8000',
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
