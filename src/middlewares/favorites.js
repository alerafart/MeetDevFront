// In this middleimport axios from 'axios';
// == Import npm
import axios from 'axios';
// == Import action creator
import { favoritesList } from '../actions/favoritesaction';
// == Import action
import {
  ADD_ONE_FAVORITE, DELETE_ONE_FAVORITE, recruiterFavorites, RECRUITER_FAVORITES,
} from '../actions/middleware';
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

const favorisFromApi = (store) => (next) => (action) => {
  switch (action.type) {
    case RECRUITER_FAVORITES: {
      const state = store.getState();
      const id = state.settings.log.user_id;
      const { token } = state.settings.log;

      axios
        .get(

          `${baseUrl}/api/secure/favorites/recruiters/${id}`,
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

          // console.log(response.data);
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

      const url = `${baseUrl}/api/secure/favorites/recruiters`;

      axios
        .post(url, params, config)
        .then(() => {
          // console.log(response.data);
          // console.log('favori bien ajouté de la liste');
          store.dispatch(recruiterFavorites());
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

          `${baseUrl}/api/secure/favorites/${id}`,
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
        .then(() => {
          // console.log('favori bien supprimé de la liste');
          store.dispatch(recruiterFavorites());
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
