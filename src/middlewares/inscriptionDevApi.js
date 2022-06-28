// == Import npm
import axios from 'axios';
// == Import action
import { INSCRIPTION_DEV } from '../actions/middleware';
// import { registerDev } from '../actions/formRegisterDev';
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

const inscriptionDevApi = (store) => (next) => (action) => {
  switch (action.type) {
    case INSCRIPTION_DEV: {
      const state = store.getState();

      const {
        lastname,
        firstname,
        city,
        email,
        zipCode,
        departement,
        technology,
        phone,
        password,
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
      } = state.formRegisterDev.register;

      // Transformation du tableau de technology reçu en string:
      const technologyInString = technology.toString();

      axios.post(
        // 'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/register/users/developers',
        `${baseUrl}/api/register/users/developers`,
        // ou url: 'http://localhost/api/users:8000',
        {
          lastname: lastname,
          firstname: firstname,
          city: city,
          zip_code: zipCode,
          department: departement,
          email_address: email,
          phone: phone,
          password: password,
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
        },
      )
        .then(() => {
          // console.log(response.data);
          console.log('formulaire envoyé');
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

export default inscriptionDevApi;
