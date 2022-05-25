import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { logout, toggleWindowLog } from '../../actions/settings';
import { login, loginCancel } from '../../actions/formLogin';
import { loginTest } from '../../actions/middleware';
import { resendVerification } from '../../actions/verifiedEmail';
import './verifyEmail.scss';

function VerifyEmail() {
  // const params = useParams();
  // const { slug } = params;

  const formLogin = useSelector((state) => state.formLogin.login);
  const dispatch = useDispatch();

  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(login(value, name));
  }

  // useEffect(
  //   () => {
  //     dispatch(verifyUserEmail(slug));
  //   },
  //   [verifyUserEmail],
  // );

  const isVerified = useSelector((state) => state.verifyEmail.emailVerified);
  console.log(isVerified);

  function handleSubmit() {
    // dispatch(toggleWindowLog());

    /* if (formLogin.password.length > 0) {
      console.log(formLogin.password.length);
      isEmptyPass = false;
      // dispatch(loginTest());
    }
    if (formLogin.email.length > 0) {
      console.log(formLogin.email);
      isEmptyMail = false;
    } */
    dispatch(loginTest());
  }

  return (
    <div
      className="modalLoginBackground"
    >
      <div className="modalLoginContainer">
        <header className="modalLoginContainer__header--verify">
          <h2 className="modalLoginContainer__header--title">
            Bienvenue
          </h2>
          <div>
            {isVerified ? 'Adresse email vérifiée avec succès ! Merci :)' : 'Une erreur est survenue, l\'adresse email n\'a pas pu être vérifiée' }
          </div>
          <Link to="/">
            <button
              className="modalLoginContainer__header--button"
              type="button"
              onClick={() => {
                dispatch(toggleWindowLog());
                dispatch(logout());
                dispatch(loginCancel());
              }}
            >
              X
            </button>
          </Link>
        </header>

        <form className="modalLoginContainer__form" onChange={handleChangeForm} onSubmit={handleSubmit}>
          {/* <input className={!isEmptyMail ? 'modalLoginContainer__form--login' : 'field__empty--error'} type="email" placeholder="Email" value={formLogin.email} name="email" /> */}
          <input className="modalLoginContainer__form--login" type="email" placeholder="Email" value={formLogin.email} name="email" />
          {/* <input className={isEmptyPass ? 'modalLoginContainer__form--password' : 'field__empty--error'} type="password" placeholder="Mot de passe" name="password" value={formLogin.password} /> */}
          <input className="modalLoginContainer__form--password" type="password" placeholder="Mot de passe" name="password" value={formLogin.password} />
          <p className="modalLoginContainer__form--error">
            L'email et/ou le mot de passe sont incorrects
          </p>
          <div className="modalLoginContainer__form__remember">
            <input
              className="modalLoginContainer__form__remember--checkbox"
              type="checkbox"
              // checked={formLogin.saveMe === true}
              name="saveMe"
            />
            Se souvenir de moi
          </div>
          <Link to="/profil">
            <button
              type="submit"
              className="modalLoginContainer__form--connexion"
              onClick={() => {
                dispatch(toggleWindowLog());
                handleSubmit();
                // dispatch(logged());
              }}
            >
              Se connecter
            </button>
          </Link>
        </form>

        <footer className="modalLoginContainer__footer">
          <span className="modalLoginContainer__footer--forget">
            Mot de passe oublié?
          </span>
          <button
            type="button"
            className="modalLoginContainer__footer__button--resend"
            onClick={() => {
              dispatch(resendVerification());
            }}
          >
            Renvoyer un mail de vérification
          </button>
        </footer>

      </div>
    </div>

  );
}

export default VerifyEmail;
