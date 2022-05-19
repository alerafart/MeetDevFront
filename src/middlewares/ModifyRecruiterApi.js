import axios from 'axios';
import { VALIDATE_MODIFY_RECRUITER } from '../actions/middleware';

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
        /* department,
        zipCode,
        profilePicture, */
        description,
      } = state.profilRecruiterModifyTemp.register;
      const userId = state.settings.log.user_id;

      axios.put(
        `http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/users/${userId}`,
        // ou url: 'http://localhost/api/users:8000',
        {
          lastname: lastname,
          firstname: firstname,
          city: city,
          zip_code: 14000, // TODO a changer
          department: 14, // TODO a changer
          phone: phone,
          subscribe_to_push_notif: 0, // non dynamique pour le moment
          profile_picture: 'ldlc.png', // TODO a changer
          needs_description: description,
          // status: status,
          company_name: firms,
          web_site_link: website,
          available_for_recruiters: 1, // non dynamique pour le moment
          available_for_developers: 1, // non dynamique pour le moment
          minimum_salary_requested: 40000, // non dynamique pour le moment
        },
      )
        .then((response) => {
          console.log('modication réussi');
          console.log(response.data);
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
