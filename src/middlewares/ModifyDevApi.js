import axios from 'axios';
import { VALIDATE_MODIFY_DEV } from '../actions/middleware';

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
      console.log(token);
      // Transformation du tableau de technology reçu en string:
      const technologyInString = technology.toString();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const params = {
        params: {
          // lastname: lastname,
          // firstname: firstname,
          // city: city,
          // zip_code: zipCode,
          // department: departement,
          // phone: phone,
          // subscribe_to_push_notif: 0, // TODO pas pris en compte pour le moment
          // profile_picture: profilePicture,
          // label: label,
          // description: description,
          // available_for_recruiters: availability,
          // available_for_developers: availability, // pour le moment dispo pas différencié
          // minimum_salary_requested: salary,
          // // maximum_salary_requested: 0,
          // age: age, // non pris en comtpe
          // languages: technologyInString,
          // years_of_experience: experience,
          // english_spoken: english,
          // github_link: github,
          // portfolio_link: portfolio,
          // other_link: '', // non pris en compte
          // language: '', // non pris en compte: Obligatoire?
          lastname: 'teinturier',
          firstname: 'henri',
          city: 'Caen',
          department: 14,
          zip_code: 14000,
          phone: 616262394,
          subscribe_to_push_notif: 0,
          profile_picture: 'manAvatar4',
          label: 'developper Front-end React',
          description: 'Je recherche une entreprise ou je pourrais progresser sur des technologies actuelles',
          available_for_recruiters: 1,
          available_for_developers: 1,
          minimum_salary_requested: 30,
          maximum_salary_requested: null,
          age: 45,
          languages: 'JavaScript,TypeScript,python,React',
          years_of_experience: 1,
          english_spoken: 'middle',
          github_link: 'github\/henri',
          portfolio_link: 'www.henriteinturier@gmail.com',
          other_link: '',

        },
      };

      const url = `http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/users/${userId}`;
      console.log('ligne 68');
      axios.put(url, params, config,
        // TODOO ligne 34 mettre en dynamqiue l'id user
        // TODO RECHARGER PROFIL DEV
        // axios.put(
        //   `http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/users/${userId}`,
        //   // ou url: 'http://localhost/api/users:8000',
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //     lastname: lastname,
        //     firstname: firstname,
        //     city: city,
        //     zip_code: zipCode,
        //     department: departement,
        //     phone: phone,
        //     subscribe_to_push_notif: 0,
        //     profile_picture: profilePicture,
        //     label: label,
        //     description: description,
        //     available_for_recruiters: availability,
        //     available_for_developers: availability, // pour le moment dispo pas différencié
        //     minimum_salary_requested: salary,
        //     // maximum_salary_requested: 0,
        //     age: age, // non pris en comtpe
        //     languages: technologyInString,
        //     years_of_experience: experience,
        //     english_spoken: english,
        //     github_link: github,
        //     portfolio_link: portfolio,
        //     other_link: '', // non pris en compte
        //     language: '', // non pris en compte: Obligatoire?
        //   },
      ).then((response) => {
        console.log(response.data);
        console.log('modification envoyé');
        // TODO BACK VA COIRRIGER POUR ME RENVOYER LES INFOS AVEC LA REPONSE
      }).catch((error) => {
        console.log(error);
        console.log('modification echec');
      });
      console.log('ligne 114');
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default ModifyDevApi;
