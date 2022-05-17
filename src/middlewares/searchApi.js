import axios from 'axios';
import { saveProfile } from '../actions/formSearchDev';
import { FETCH_PROFILE } from '../actions/middleware';

const searchApi = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROFILE: {
      const state = store.getState();
      const {
        city, technology, experience,
      } = state.formSearchDev.search;
      axios.get(
        'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/users/search',
        {
          params:
          {
            city: city,
            language: technology,
            exp: experience,
          },
        },
      )
        .then((response) => {
          // All of search datas
          console.log(response.data.res);
          // answer status
          const { status } = response.data;
          // status message
          const statusMessage = response.data.message;

          // condition if the status and message is ok
          if (status === 'success' && statusMessage === 'Profile loaded successfuly') {
            // save data in the state (formSearchDev)

            store.dispatch(saveProfile(response.data.res));
          }
          // condition if the status and message is bad
          else {
            console.log('probleme de connexion');
          }
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
