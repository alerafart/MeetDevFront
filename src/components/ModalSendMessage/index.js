import { useDispatch } from 'react-redux';
import { setToggleModalSendMessage } from '../../actions/settings';
import './modalDevContact.scss';

function ModalSendMessage() {
  const dispatch = useDispatch();
  return (
    <div
      className="modalDevContactBackground"
    >
      <div className="modalDevContactContainer">
        <header className="modalDevContactContainer__header">
          <h2 className="modalDevContactContainer__header--title">
            Formulaire de Contact
          </h2>
          <button
            className="modalDevContactContainer__header--button"
            type="button"
            onClick={() => {
              dispatch(setToggleModalSendMessage());
            }}
          >
            X
          </button>
        </header>

        <form className="modalDevContactContainer__form">
          <p className="modalDevContactContainer__form--label">Titre</p>
          <input className="modalDevContactContainer__form--titre" type="txt" />
          <p className="modalDevContactContainer__form--label">Message</p>
          <textarea className="modalDevContactContainer__form--message" value="" />

          <button
            type="submit"
            className="modalDevContactContainer__form--connexion"
            onClick={() => {
              dispatch(setToggleModalSendMessage());
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
