import axios from 'axios';
import { fetchProfileModale, saveProfile } from '../actions/formSearchDev';
import { FETCH_PROFILE } from '../actions/middleware';

const searchApi = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROFILE: {
      const state = store.getState();
      const {
        city, technology, experience, availability,
      } = state.formSearchDev.search;
      axios.get(
        'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/users/search',
        {
          params:
          {
            city: city,
            language: technology,
            exp: experience,
            availabilty: availability,
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

          const userData = response.data.res;

          // condition if the status and message is ok
          if (status === 'success' && statusMessage === 'Profile loaded successfuly') {
            // save data in the state (formSearchDev)
            store.dispatch(saveProfile(response.data.res));

            store.dispatch(fetchProfileModale(userData[0].lastname, 'lastname'));
            store.dispatch(fetchProfileModale(userData[0].firstname, 'firstname'));
            store.dispatch(fetchProfileModale(userData[0].city, 'city'));
            store.dispatch(fetchProfileModale(userData[0].profile_picture, 'profile_picture'));
            store.dispatch(fetchProfileModale(userData[0].years_of_experience, 'years_of_experience'));
            store.dispatch(fetchProfileModale(userData[0].languages, 'languages'));
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
