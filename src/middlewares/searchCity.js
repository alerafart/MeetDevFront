// == Import npm
import axios from 'axios';
// == Import action
import { SEARCH_CITY } from '../actions/middleware';
// == Import action creator
import { addResultSearchCity } from '../actions/settings';

const searchCity = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_CITY: {
      const state = store.getState();
      let adress = state.formRegisterDev.register.city;
      if (!adress) {
        // console.log('recupadressdans temp modify');
        adress = state.profilDevModifyTemp.register.city;
      }
      // console.log(adress);
      axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=${adress}&type=municipality&autocomplete=1`,
        // ou url: 'http://localhost/api/users:8000',
      )
        .then((response) => {
          // response.data.features.map((e)
          // => console.log(e.properties.postcode, e.properties.city));
          store.dispatch(addResultSearchCity(response.data.features));
        }).catch((error) => {
          console.log(error.response);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default searchCity;
