import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loading, logout, toggleWindowLog } from '../../actions/settings';
import { login, loginCancel } from '../../actions/formLogin';
import { loginTest } from '../../actions/middleware';
import './modalLogin.scss';

function ModalLogin() {
  const formLogin = useSelector((state) => state.formLogin.login);
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch();

  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(login(value, name));
  }

  function handleSubmit() {
    // event.preventDefault();
    // console.log('click');
    dispatch(loading());
    setTimeout(() => {
      dispatch(loginTest());
    }, 1000);
    // dispatch(loginTest());
  }

  // function test() {
  //   dispatch(loginTest());
  // }

  return (
    <div
      className={isDark ? 'modalLoginBackground dark' : 'modalLoginBackground'}
    >
      <div className={isDark ? 'modalLoginContainer dark' : 'modalLoginContainer'}>
        <header className={isDark ? 'modalLoginContainer__header dark' : 'modalLoginContainer__header'}>
          <h2 className={isDark ? 'modalLoginContainer__header--title dark' : 'modalLoginContainer__header--title'}>
            Bienvenue
          </h2>
          <Link to="/">
            <button
              className={isDark ? 'modalLoginContainer__header--button dark' : 'modalLoginContainer__header--button'}
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
          <input className="modalLoginContainer__form--login" type="email" placeholder="Email" value={formLogin.email} name="email" />
          <input className="modalLoginContainer__form--password" type="password" placeholder="Mot de passe" name="password" value={formLogin.password} />
          {/* <p className="modalLoginContainer__form--error">
            L'email et/ou le mot de passe sont incorrects
          </p> */}
          <div className={isDark ? 'modalLoginContainer__form__remember dark' : 'modalLoginContainer__form__remember'}>
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
          <p className="modalLoginContainer__footer--forget">
            Mot de passe oublié?
          </p>
          <p className={isDark ? 'modalLoginContainer__footer--register dark' : 'modalLoginContainer__footer--register'}>
            Vous n'êtes pas inscrit? <span> Inscription</span>
          </p>
        </footer>

      </div>
    </div>

  );
}

export default ModalLogin;
