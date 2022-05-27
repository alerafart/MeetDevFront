// == Import npm
import { useDispatch, useSelector } from 'react-redux';
// == Import action creator
import { contactDev, contactDevRaz } from '../../actions/formDevContact';
import { sendMessage } from '../../actions/messageAction';
import { setToggleModalSendMessage } from '../../actions/settings';
// == Import style
import './modalDevContact.scss';
// == Copmponent
function ModalSendMessage() {
  // state to have title and message from formDevContact
  const formContact = useSelector((state) => state.formDevContact.formContact);
  const dispatch = useDispatch();
  // function to change value of formDevContact state
  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    // console.log(`name: ${name}    value:${value}`);
    dispatch(contactDev(value, name));
  }

  return (
    <div
      className="modalDevContactBackground"
    >
      <div className="modalDevContactContainer">
        <header className="modalDevContactContainer__header">
          <h2 className="modalDevContactContainer__header--title">
            Formulaire de Contact
          </h2>
          { /* button to close message modal and clear state */}
          <button
            className="modalDevContactContainer__header--button"
            type="button"
            onClick={() => {
              dispatch(setToggleModalSendMessage());
              dispatch(contactDevRaz());
            }}
          >
            X
          </button>
        </header>

        <form className="modalDevContactContainer__form" onChange={handleChangeForm}>
          <p className="modalDevContactContainer__form--label">Titre</p>
          <input className="modalDevContactContainer__form--titre" type="txt" name="title" value={formContact.title} />
          <p className="modalDevContactContainer__form--label">Message</p>
          <textarea className="modalDevContactContainer__form--message" name="message" value={formContact.message} />
          { /* button to send message and close modal */}
          <button
            type="submit"
            className="modalDevContactContainer__form--connexion"
            onClick={() => {
              dispatch(sendMessage());
              dispatch(setToggleModalSendMessage());
              // dispatch(contactDevRaz());
            }}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalSendMessage;
