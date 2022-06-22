// == Import npm
import axios from 'axios';
// == Import action
import { LOGIN_TEST } from '../actions/middleware';
// == Import action creator
import { dataProfilDevFromApi } from '../actions/profilDev';
import { dataProfilRecruiterFromApi } from '../actions/profilRecruiter';
import {
  logged,
  isDev as actionIsDev,
  isRecruiter as actionIsRecruiter,
  loading,
  messageContent,
  displayMessage,
  hideMessage,
} from '../actions/settings';

const apiMiddleWare = (store) => (next) => (action) => {
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
  // console.log(`${baseUrl}/api/login`);

  switch (action.type) {
    // TODO changer le nom de cette action.
    // Login rentrait en conflit avec une autre action d'un autre reducer
    case LOGIN_TEST: {
      const state = store.getState();
      const { email, password } = state.formLogin.login;
      axios.post(
        // 'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/login',
        `${baseUrl}/api/login`,
        // ou url: 'http://localhost/api/users:8000',
        {
          email_address: email,
          password: password,
        },
      )
        .then((response) => {
          // Récupération des données reçus de notre demande de login
          // console.log(response);
          // console.log(response.data);
          if (response.data === 'Unauthorized, your email address testing@gmail.com is not verified.') {
            console.log('email non vérifié');
            store.dispatch(loading());
            // envoyer message erreur ou validate + message content
            store.dispatch(messageContent('Email non vérifié', false));
            // afficher message
            store.dispatch(displayMessage());
            // settimeout 2s masquer message
            setTimeout(() => {
              store.dispatch(hideMessage());
            }, 2000);
          }

          const { status } = response.data;
          // récupération du message lié au statut de la réponse
          const statusMessage = response.data.message;
          const { isDev } = response.data;
          const { isRecruiter } = response.data;
          const token = response.data.token.original.access_token;
          // les datas de l'utilisateurs
          const user = response.data.general;
          // les datas de la table pivot dev ou recruiter
          const userData = response.data.spec[0];

          // Changement du state settings: logged:true + save email utilisateur)
          store.dispatch(logged(user.email_address, user.id, user.dev_id, user.recrut_id, token));

          // TEST SI SUCCESS
          if (status === 'success' && statusMessage === 'Login successfull') {
            // envoyer message erreur ou validate + message content
            store.dispatch(messageContent('connexion réussie', true));
            // afficher message
            store.dispatch(displayMessage());
            // settimeout 2s masquer message
            setTimeout(() => {
              store.dispatch(hideMessage());
            }, 2000);
            if (isDev) {
              // changement du state settings: isDev: true
              store.dispatch(actionIsDev());
              // save des données reçus dans notre state (formRegisterDev)
              store.dispatch(dataProfilDevFromApi(user.firstname, 'firstname'));
              store.dispatch(dataProfilDevFromApi(user.lastname, 'lastname'));
              store.dispatch(dataProfilDevFromApi(userData.age, 'age'));
              store.dispatch(dataProfilDevFromApi(user.email_address, 'email'));
              store.dispatch(dataProfilDevFromApi(user.city, 'city'));
              store.dispatch(dataProfilDevFromApi(user.zip_code, 'zipCode'));
              store.dispatch(dataProfilDevFromApi(user.department, 'departement'));
              store.dispatch(dataProfilDevFromApi(userData.description, 'description'));
              store.dispatch(dataProfilDevFromApi(userData.label, 'label'));
              store.dispatch(dataProfilDevFromApi(user.profile_picture, 'profilePicture'));
              store.dispatch(dataProfilDevFromApi(userData.available_for_developers, 'available_for_developers'));
              store.dispatch(dataProfilDevFromApi(userData.available_for_recruiters, 'available_for_recruiters'));
              store.dispatch(dataProfilDevFromApi(userData.available_for_recruiters, 'availability'));

              store.dispatch(dataProfilDevFromApi(user.phone, 'phone'));
              store.dispatch(dataProfilDevFromApi(user.password, 'password'));
              //* transform languages string to array technologies
              const technologies = userData.languages.split(',');
              store.dispatch(dataProfilDevFromApi(technologies, 'technology'));
              store.dispatch(dataProfilDevFromApi(userData.years_of_experience, 'experience'));
              store.dispatch(dataProfilDevFromApi(userData.portfolio_link, 'portfolio'));

              store.dispatch(dataProfilDevFromApi(userData.github_link, 'github'));
              // store.dispatch(dataProfilDevFromApi('', 'languages'));
              store.dispatch(dataProfilDevFromApi(userData.english_spoken, 'english'));
              store.dispatch(dataProfilDevFromApi(userData.minimum_salary_requested, 'salary'));
              // store.dispatch(dataProfilDevFromApi('', 'gender'));
              // redirection vers page profil
              store.dispatch(loading());
            }
            else if (isRecruiter) {
              // changement du state settings: isDev: true
              store.dispatch(actionIsRecruiter());
              // save des données reçus dans notre state (formRegisterRecruiter)
              store.dispatch(dataProfilRecruiterFromApi(response.data.status, 'status'));
              store.dispatch(dataProfilRecruiterFromApi(response.data.message, 'message'));
              store.dispatch(dataProfilRecruiterFromApi(user.firstname, 'firstname'));
              store.dispatch(dataProfilRecruiterFromApi(user.lastname, 'lastname'));
              store.dispatch(dataProfilRecruiterFromApi(userData.company_name, 'firms'));
              store.dispatch(dataProfilRecruiterFromApi(user.city, 'city'));
              store.dispatch(dataProfilRecruiterFromApi(user.department, 'department'));
              store.dispatch(dataProfilRecruiterFromApi(user.zip_code, 'zipCode'));
              store.dispatch(dataProfilRecruiterFromApi(user.phone, 'phone'));
              store.dispatch(dataProfilRecruiterFromApi(userData.web_site_link, 'website'));
              store.dispatch(dataProfilRecruiterFromApi(user.email_address, 'email'));
              store.dispatch(dataProfilRecruiterFromApi(user.password, 'password'));
              store.dispatch(dataProfilRecruiterFromApi(user.profile_picture, 'profilePicture'));
              store.dispatch(dataProfilRecruiterFromApi(userData.needs_description, 'description'));
              store.dispatch(loading());
            }
            else {
              console.log('probleme de connexion');
            }
          }
        }).catch((error) => {
          console.log(error.response);
          store.dispatch(loading());
          // envoyer message erreur ou validate + message content
          store.dispatch(messageContent('mauvais email ou mot de passe', false));
          // afficher message
          store.dispatch(displayMessage());
          // settimeout 2s masquer message
          setTimeout(() => {
            store.dispatch(hideMessage());
          }, 2000);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddleWare;
