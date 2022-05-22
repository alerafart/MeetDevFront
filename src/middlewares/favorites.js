import axios from 'axios';
import { favoritesList } from '../actions/favoritesaction';

import { ADD_ONE_FAVORITE, DELETE_ONE_FAVORITE, RECRUITER_FAVORITES } from '../actions/middleware';

const favorisFromApi = (store) => (next) => (action) => {
  switch (action.type) {
    case RECRUITER_FAVORITES: {
      const state = store.getState();
      const id = state.settings.log.user_id;
      const { token } = state.settings.log;

      axios
        .get(

          `https://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/favorites/recruiters/${id}`,
          // ou url: 'http://localhost/api/users:8000',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },

            params: {
              id: id,
            },
          },
        )
        .then((response) => {
          const responseArray = response.data.favoriteUsersData;
          const favorites = responseArray.map((character, index) => ({
            data: response.data.favoriteUsersData[index],
            detailId: response.data.favoritesDetails[index].id,
          }));

          store.dispatch(favoritesList(favorites));
        }).catch((error) => {
          console.log(error.response.data);
        });
      next(action);
      break;
    }

    case ADD_ONE_FAVORITE: {
      const state = store.getState();
      const recrutUserId = state.settings.log.user_id;
      const devUserId = state.modalProfil.userId;
      const { token } = state.settings.log;
      // console.log(recrutUserId);
      // console.log(devUserId);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const params = {
        devUserId: devUserId,
        recrutUserId: recrutUserId,
      };

      const url = 'https://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/favorites/recruiters';

      axios
        .post(url, params, config)
        .then((response) => {
          console.log(response.data);
          console.log('favori bien ajouté de la liste');
        }).catch((error) => {
          console.log(error.response.data);
        });
      next(action);
      break;
    }
    case DELETE_ONE_FAVORITE: {
      const state = store.getState();
      const id = state.modalProfil.result.detailId;
      const { token } = state.settings.log;
      // console.log(id);
      axios
        .delete(

          `https://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/favorites/${id}`,
          // ou url: 'http://localhost/api/users:8000',
          {
            // TODO ready to test JWT
            headers: {
              Authorization: `Bearer ${token}`,
            },

            params: {
              id: id,
            },
          },
        )
        .then((response) => {
          console.log(response.data);
          console.log('favori bien supprimé de la liste');
        }).catch((error) => {
          console.log(error.response.data);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default favorisFromApi;
