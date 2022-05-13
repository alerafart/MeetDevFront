import './modalLogin.scss';
import PropTypes from 'prop-types';

function ModalLogin({ setCloseModal }) {
  return (
    <div
      className="modalLoginBackground"
    >
      <div className="modalLoginContainer">
        <header className="modalLoginContainer__header">
          <h2 className="modalLoginContainer__header--title">
            CONNECTEZ-VOUS
          </h2>
          <button
            className="modalLoginContainer__header--button"
            type="button"
            onClick={() => {
              setCloseModal(false);
            }}
          >
            X
          </button>
        </header>

        <form className="modalLoginContainer__form">
          <input className="modalLoginContainer__form--login" type="email" placeholder="Login" />
          <input className="modalLoginContainer__form--password" type="password" placeholder="Password" />
          <p className="modalLoginContainer__form--error">
            L'email et/ou le mot de passe sont incorrects
          </p>
          <div className="modalLoginContainer__form__remember">
            <input
              className="modalLoginContainer__form__remember--checkbox"
              type="checkbox"
            />
            Se souvenir de moi
          </div>
          <button
            type="submit"
            className="modalLoginContainer__form--connexion"
            onClick={(e) => {
              e.preventDefault();
              setCloseModal(false);
            }}
          >
            CONNEXION
          </button>
        </form>

        <footer className="modalLoginContainer__footer">
          <p className="modalLoginContainer__footer--forget">
            Mot de passe oublié?
          </p>
          <p className="modalLoginContainer__footer--register">
            Vous n'êtes pas inscrit? <span> Inscription</span>
          </p>
        </footer>

      </div>
    </div>

  );
}

ModalLogin.propTypes = {
  setCloseModal: PropTypes.func.isRequired,
};

export default ModalLogin;
