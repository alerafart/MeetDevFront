import axios from 'axios';
import { saveProfile } from '../actions/formSearchDev';
import { FETCH_PROFILE } from '../actions/middleware';

const searchApi = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROFILE: {
      const state = store.getState();
      const { token } = state.settings.log;

      // TODO prepared for deploiement JWT
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // };

      const {
        city, technology, experience,
      } = state.formSearchDev.search;
      axios.get(
        'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/users/search',
        {
          // TODO ready to test JWT
          config: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },

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
          // console.log(response.data.res[0].userDetails);
          // console.log(response.data.res);
          // console.log(response.data.message);
          // answer status
          const { status } = response.data;
          // status message
          const statusMessage = response.data.message;

          // condition if the status and message is ok
          if (status === 'success' && statusMessage === 'Profile loaded successfuly') {
            // save data in the state (formSearchDev)
            const searchDev = response.data.res.map((character, index) => ({
              data: response.data.res[index].userDetails[0],
              userId: response.data.res[index].userId,
            }));
            store.dispatch(saveProfile(searchDev));
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
