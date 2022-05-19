import axios from 'axios';
import { favoritesList } from '../actions/favorites';

import { ADD_ONE_FAVORITE, DELETE_ONE_FAVORITE, RECRUITER_FAVORITES } from '../actions/middleware';
// import { registerDev } from '../actions/formRegisterDev';

/* export const initialState = {
  favoris: [],
}; */

const favorisFromApi = (store) => (next) => (action) => {
  switch (action.type) {
    case RECRUITER_FAVORITES: {
      const state = store.getState();
      const id = state.settings.log.user_id;

      console.log(id);
      axios
        .get(

          `http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/favorites/recruiters/${id}`,
          // ou url: 'http://localhost/api/users:8000',
          {
            params: {
              id: id,
            },
          },
        )
        .then((response) => {
          console.log(response.data);
          console.log(response.data.favoriteUsersData);
          // console.log(response.data.favoriteUsersData.length());
          console.log(response.data.favoritesDetails);
          // console.log(response.data.favoritesDetails.length());
          // const essai2 = response.data.favoriteUsersData.map(
          //   (e, index) => (console.log(index, e, response.data.favoritesDetails[index])),
          // );

          // const essai = response.data.favoriteUsersData.map(
          //   (e, index) => (index, e, response.data.favoritesDetails[index]),
          // );

          const favorites = response.data.favoriteUsersData.map((character, index) => ({
            // index: index,
            // character: character[index],
            data: response.data.favoriteUsersData[index],
            // lastname: response.data.favoriteUsersData[index][index].lastname,
            // firstname: response.data.favoriteUsersData[index][index].firstname,
            // favorite: response.data.favoritesDetails[index],
            detailId: response.data.favoritesDetails[index].id,
          }));

          // store.dispatch(favoritesList(response.data));
          // {favoritesArray?.map(

          //   (favorite) => (
          //     <Card favorite={favorite} key={favorite[0].id} />

          //   ),

          console.log(favorites);
          store.dispatch(favoritesList(favorites));
          // store.dispatch(favoritesList(response.data));
        }).catch((error) => {
          console.log(error.response.data);
        });
      next(action);
      break;
    }

    case ADD_ONE_FAVORITE: {
      const state = store.getState();
      const devUserId = state.modalProfil.userId;
      const recrutUserId = state.settings.log.user_id;

      console.log(devUserId);
      console.log(recrutUserId);

      axios
        .post(

          'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/favorites/recruiters',
          // ou url: 'http://localhost/api/users:8000',
          {
            devUserId: devUserId,
            recrutUserId: recrutUserId,
          },

        )
        .then((response) => {
          console.log(response.data);
          console.log('favori bien supprimé de la liste');

          // store.dispatch(favoritesList(response.data));
        }).catch((error) => {
          console.log(error.response.data);
        });
      next(action);
      break;
    }

    case DELETE_ONE_FAVORITE: {
      const state = store.getState();
      const id = state.modalProfil.result.detailId;

      console.log(id);
      axios
        .delete(

          `http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/favorites/${id}`,
          // ou url: 'http://localhost/api/users:8000',
          {
            params: {
              id: id,
            },
          },
        )
        .then((response) => {
          console.log(response.data);
          console.log('favori bien supprimé de la liste');

          // store.dispatch(favoritesList(response.data));
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
