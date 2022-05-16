import axios from 'axios';
import { INSCRIPTION_DEV } from '../actions/middleware';
// import { registerDev } from '../actions/formRegisterDev';

const inscriptionDevApi = (store) => (next) => (action) => {
  switch (action.type) {
    case INSCRIPTION_DEV: {
      const state = store.getState();

      // TODO mise à jour des champs
      const {
        lastname, firstname, city, email,
        phone, password, salary, age, experience, github, portfolio,
      } = state.formRegisterDev.register;
      // console.log(
      //   lastname,
      //   firstname,
      //   city,
      //   email,
      //   phone,
      //   password,
      //   salary,
      //   age,
      //   experience,
      //   github,
      //   portfolio,
      // );

      // TODO mise à jour des champs
      axios.post(
        'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/users/developer',
        // ou url: 'http://localhost/api/users:8000',
        {
          lastname: lastname,
          firstname: firstname,
          city: city,
          zip_code: 14000,
          email_address: email,
          phone: phone,
          password: password,
          subscribe_to_push_notif: 0,
          profile_picture: 'pic.formRegister.register.png',
          description: 'hello',
          available_for_recruiters: 1,
          available_for_developers: 0,
          minimum_salary_requested: salary,
          maximum_salary_requested: 0,
          age: age,
          years_of_experience: experience,
          github_link: github,
          portfolio_link: portfolio,
          other_link: '',
        },
      )
        .then((response) => {
          console.log(response.data);
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
