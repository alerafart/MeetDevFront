// == Import npm
import axios from 'axios';
// == Import action
import { VALIDATE_MODIFY_RECRUITER } from '../actions/middleware';
// == Import action creator
import { majProfilRecruiterFromApi } from '../actions/profilRecruiter';

const ModifyRecruiterApi = (store) => (next) => (action) => {
  switch (action.type) {
    case VALIDATE_MODIFY_RECRUITER: {
      const state = store.getState();

      const {
        // status,
        lastname,
        firstname,
        city,
        phone,
        firms,
        website,
        department,
        zipCode,
        profilePicture,
        description,
      } = state.profilRecruiterModifyTemp.register;
      const userId = state.settings.log.user_id;
      const { token } = state.settings.log;
      console.log(token);
      console.log(userId);
      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const params = {

        lastname: lastname,
        firstname: firstname,
        city: city,
        zip_code: zipCode,
        department: department,
        phone: phone,
        subscribe_to_push_notif: 0, // non dynamique pour le moment
        profile_picture: profilePicture,
        needs_description: description,
        // status: status,
        company_name: firms,
        // company_name: 'essai',
        web_site_link: website,
        available_for_recruiters: 1, // non dynamique pour le moment
        available_for_developers: 1, // non dynamique pour le moment
        minimum_salary_requested: 40000, // non dynamique pour le moment

      };

      const url = `http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/users/${userId}`;

      // axios.put(url, params, config);
      // TODO ATTENTION BUG BACK NE RENVOI PAS LES BONNES
      // DONNES DU COUP JE RECUPERE LES INFOS DE RECRUITERTEMP
      // POUR MISE A JOUR
      axios.put(url, params, config)
        .then((response) => {
          const recruiterModifie = state.profilRecruiterModifyTemp.register;
          console.log(recruiterModifie);
          console.log('modication réussi');
          console.log(response.data);
          store.dispatch(majProfilRecruiterFromApi(recruiterModifie));
        }).catch((error) => {
          console.log('modication echec');
          console.log(error.response.data);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default ModifyRecruiterApi;
