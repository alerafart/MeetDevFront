import './modalDevContact.scss';
import PropTypes from 'prop-types';

function ModalDevContact({ setCloseModal }) {
  return (
    <div
      className="modalDevContactBackground"
    >
      <div className="modalDevContactContainer">
        <header className="modalDevContactContainer__header">
          <h2 className="modalDevContactContainer__header--title">
            CONTACT
          </h2>
          <button
            className="modalDevContactContainer__header--button"
            type="button"
            onClick={() => {
              setCloseModal(false);
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
            onClick={(e) => {
              e.preventDefault();
              setCloseModal(false);
            }}
          >
            ENVOYER
          </button>
        </form>
      </div>
    </div>
  );
}

ModalDevContact.propTypes = {
  setCloseModal: PropTypes.func.isRequired,
};

export default ModalDevContact;
