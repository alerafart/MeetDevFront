import axios from 'axios';
import { SEARCH_PROFILE } from '../actions/middleware';

const searchApi = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_PROFILE: {
      const state = store.getState();
      const {
        city, technology, experience, availability,
      } = state.formSearchDev.search;
      axios.get(
        'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/users/search-results',
        {
          params:
          {
            city: city,
            languages: technology,
            exp: experience,
            availabilty: availability,
          },
        },
      )
        .then((response) => {
          // Récupération des données reçus de notre demande de search
          console.log(response.data);
          console.log('profils trouvés');
        }).catch((error) => {
          console.log(error.response);
          console.log('problème de connexion');
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default searchApi;
