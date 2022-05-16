import { NavLink, Link } from 'react-router-dom';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import rocket from '../../assets/images/rocket1.png';
import { logout, toggleWindowLog, setFromAway } from '../../actions/settings';

function Header() {
  const logged = useSelector((state) => state.settings.log.logged);
  const dispatch = useDispatch();
  const isDev = useSelector((state) => state.settings.log.isDev);
  const isRecruiter = useSelector((state) => state.settings.log.isRecruiter);

  const titleDev = useSelector((state) => state.profilDev.register);
  const titleRec = useSelector((state) => state.profilRecruiter.register);

  return (
    <div className="header">
      {
        (logged && isDev) && (

          <div className="header__login">{titleDev.firstname} {titleDev.lastname}</div>
        )
      }
      {
        (logged && isRecruiter) && (

          <div className="header__login">{titleRec.firstname} {titleRec.lastname}</div>
        )
      }

      { !logged && (
        <>
          <div className="header__enSavoirPlus">
            <Link to="/en-savoir-plus">En savoir plus</Link>
          </div>
          {/* <ul className="header__menu">
            <li className="header__menu--item"><NavLink to="/">Accueil</NavLink></li>
          </ul> */}
          <button
            type="button"
            className="header__button"
            onClick={() => {
              dispatch(toggleWindowLog());
              // setOpenModal(true);
            }}
          >
            Connexion
          </button>
        </>
      )}
      {
        logged && (
          <>
            <div className="header__logo">
              <img
                className="header__logo--img"
                src={rocket}
                alt="logo fusée"
              />
              Meet Dev
            </div>
            <ul className="header__menu">
              {isDev && (
              <>
                <li className="header__menu--item"><NavLink to="/">Accueil</NavLink></li>
                <li className="header__menu--item" onClick={() => dispatch(setFromAway())}><NavLink to="/profil">Profil</NavLink></li>
                <li className="header__menu--item"><NavLink to="/recherche">Recherche</NavLink></li>
              </>
              )}
              {isRecruiter && (
                <>
                  <li className="header__menu--item"><NavLink to="/">Accueil</NavLink></li>
                  <li className="header__menu--item" onClick={() => dispatch(setFromAway())}><NavLink to="/profil">Profil</NavLink></li>
                  <li className="header__menu--item"><NavLink to="/recherche">Recherche</NavLink></li>
                  <li className="header__menu--item"><NavLink to="/favoris">Favoris</NavLink></li>
                </>
              )}
            </ul>

            <Link to="/">
              <button
                type="button"
                className="header__button"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Deconnexion
              </button>
            </Link>
          </>
        )
      }
    </div>
  );
}

export default Header;
