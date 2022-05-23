import axios from 'axios';

import { VALIDATE_MODIFY_DEV } from '../actions/middleware';
import { majProfilDevFromApi } from '../actions/profilDev';

// const navigate = useNavigate();

const ModifyDevApi = (store) => (next) => (action) => {
  switch (action.type) {
    case VALIDATE_MODIFY_DEV: {
      const state = store.getState();
      const {
        lastname,
        firstname,
        city,
        zipCode,
        departement,
        technology,
        phone,
        salary,
        experience,
        github,
        portfolio,
        english,
        label,
        description,
        availability,
        profilePicture,
        age,
      } = state.profilDevModifyTemp.register;
      const userId = state.settings.log.user_id;
      const { token } = state.settings.log;
      // Transformation du tableau de technology reçu en string:
      const technologyInString = technology.toString();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const params = {
        lastname: lastname,
        firstname: firstname,
        city: city,
        zip_code: zipCode,
        department: departement,
        phone: phone,
        subscribe_to_push_notif: 0, // TODO pas pris en compte pour le moment
        profile_picture: profilePicture,
        label: label,
        description: description,
        available_for_recruiters: availability,
        available_for_developers: availability, // pour le moment dispo pas différencié
        minimum_salary_requested: salary,
        // maximum_salary_requested: 0,
        age: age, // non pris en comtpe
        languages: technologyInString,
        years_of_experience: experience,
        english_spoken: english,
        github_link: github,
        portfolio_link: portfolio,
        other_link: '', // non pris en compte
        language: '', // non pris en compte: Obligatoire?
      };

      const url = `http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/users/${userId}`;
      console.log('ligne 68');
      axios.put(url, params, config).then((response) => {
        console.log(response.data);
        console.log('modification envoyé');
        const developperModifie = state.profilDevModifyTemp.register;
        console.log(developperModifie);
        store.dispatch(majProfilDevFromApi(developperModifie));
        // navigate('/profil');
        // TODO BACK VA COIRRIGER POUR ME RENVOYER LES INFOS AVEC LA REPONSE
      }).catch((error) => {
        console.log(error);
        console.log('modification echec');
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default ModifyDevApi;
