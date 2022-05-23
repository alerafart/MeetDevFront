import axios from 'axios';
import { contactDevRaz } from '../actions/formDevContact';
import { SEND_MAIL } from '../actions/messageAction';

const sendMailApi = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MAIL: {
      const state = store.getState();
      const { token } = state.settings.log;
      const mailToSend = state.modalProfil.result.email;
      const sender = state.settings.log.user_id;
      const receiver = state.modalProfil.userId;
      const messageTitle = state.formDevContact.formContact.title;
      const messageContent = state.formDevContact.formContact.message;
      console.log(mailToSend, sender, receiver, messageTitle, messageContent);

      axios
        .get(

          'http://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/secure/users/contact',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },

            params: {
              // testEmail: mailToSend,
              testEmail: 'henri.teinturier@gmail.com',
              sender_user_id: sender,
              receiver_user_id: receiver,
              message_title: messageTitle,
              message_content: messageContent,
            },
          },
        )
        .then((response) => {
          console.log(response.data);
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
