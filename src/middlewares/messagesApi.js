// == Import npm
import axios from 'axios';
// == Import action creator
import { contactDevRaz } from '../actions/formDevContact';
// == Import action
import { SEND_MAIL } from '../actions/messageAction';
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

const sendMailApi = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MAIL: {
      const state = store.getState();
      const { fromSearchRoute, fromFavoritesRoute } = state.settings.navigation;
      const { token } = state.settings.log;
      // const mailToSend = state.modalProfil.result.email;
      const sender = state.settings.log.user_id;
      let receiver;
      if (fromSearchRoute) {
        receiver = state.modalProfil.userId;
      }
      else if (fromFavoritesRoute) {
        receiver = state.modalProfil.result.userId;
      }
      const messageTitle = state.formDevContact.formContact.title;
      const messageContent = state.formDevContact.formContact.message;
      // console.log(mailToSend, sender, receiver, messageTitle, messageContent);

      axios
        .get(

          `${baseUrl}/api/secure/users/contact`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },

            params: {
              // testEmail: mailToSend,
              testEmail: 'maalejandrarafart@gmail.com',
              // testEmail: 'henri.teinturier@gmail.com',
              sender_user_id: sender,
              receiver_user_id: receiver,
              message_title: messageTitle,
              message_content: messageContent,
            },
          },
        )
        .then(() => {
          // console.log(response.data);
          store.dispatch(contactDevRaz());

          // store.dispatch(favoritesList(favorites));
        }).catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default sendMailApi;
