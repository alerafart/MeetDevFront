import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleWindowLog, login } from '../../actions/settings';
import './modalLogin.scss';

function ModalLogin() {
  const dispatch = useDispatch();
  return (
    <div
      className="modalLoginBackground"
    >
      <div className="modalLoginContainer">
        <header className="modalLoginContainer__header">
          <h2 className="modalLoginContainer__header--title">
            Bienvenue
          </h2>
          <button
            className="modalLoginContainer__header--button"
            type="button"
            onClick={() => {
              dispatch(toggleWindowLog());
            }}
          >
            X
          </button>
        </header>

        <form className="modalLoginContainer__form">
          <input className="modalLoginContainer__form--login" type="email" placeholder="Email" />
          <input className="modalLoginContainer__form--password" type="password" placeholder="Mot de passe" />
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
          <Link to="/profil">
            <button
              type="button"
              className="modalLoginContainer__form--connexion"
              onClick={() => {
                dispatch(toggleWindowLog());
                dispatch(login());
              }}
            >
              Se connecter
            </button>
          </Link>
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

export default ModalLogin;
