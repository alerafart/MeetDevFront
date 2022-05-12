import axios from 'axios';
import { INSCRIPTION_RECRUITER } from '../actions/middleware';

const inscriptionRecruiterApi = (store) => (next) => (action) => {
  switch (action.type) {
    case INSCRIPTION_RECRUITER: {
      const state = store.getState();
      const { status } = state.formRegisterRecruiter.register;
      const { lastname } = state.formRegisterRecruiter.register;
      const { firstname } = state.formRegisterRecruiter.register;
      const { city } = state.formRegisterRecruiter.register;
      const { email } = state.formRegisterRecruiter.register;
      const { phone } = state.formRegisterRecruiter.register;
      const { password } = state.formRegisterRecruiter.register;
      const { firms } = state.formRegisterRecruiter.register;
      const { website } = state.formRegisterRecruiter.register;

      axios.post(
        'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/users/recruiter',
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
          needs_description: 'hello',
          status: status,
          company_name: firms,
          web_site_link: website,
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

export default inscriptionRecruiterApi;
