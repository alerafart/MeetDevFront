import axios from 'axios';
import { favoritesList } from '../actions/favorites';

import { RECRUITER_FAVORITES } from '../actions/middleware';
// import { registerDev } from '../actions/formRegisterDev';

/* export const initialState = {
  favoris: [],
}; */

const favorisFromApi = (store) => (next) => (action) => {
  switch (action.type) {
    case RECRUITER_FAVORITES: {
      const state = store.getState();
      const { id } = state.settings.log;

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
            data: response.data.favoriteUsersData[index][0],
            // lastname: response.data.favoriteUsersData[index][index].lastname,
            // firstname: response.data.favoriteUsersData[index][index].firstname,
            // favorite: response.data.favoritesDetails[index],
            developer_user_id: response.data.favoritesDetails[index].developer_user_id,
            recruiter_user_id: response.data.favoritesDetails[index].recruiter_user_id,
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
    /*
    case GET_ONE_FAVORITE_FROM_API: {
      const state = store.getState();
      const recruiterUserId = state.favorites.favorites.listFavorites[0].recruiter_user_id;
      const developerUserId = state.favorites.favorites.listFavorites[0].developer_user_id;

      console.log(recruiterUserId);
      console.log(developerUserId);

      axios
        .get(

          'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/favorites/recruiters',
          // ou url: 'http://localhost/api/users:8000',
          {
            params: {
              devId: developerUserId,
              recrutId: recruiterUserId,
            },
          },
        )
        .then((response) => {
          console.log(response.data);
        })

        .catch((error) => {
          console.log(error.response.data);
        });
      next(action);
      break;
    } */

    default:
      next(action);
  }
};

export default favorisFromApi;
