import { NavLink, Link } from 'react-router-dom';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import rocket from '../../assets/images/rocket.png';
import { logout, toggleWindowLog } from '../../actions/settings';

function Header() {
  const logged = useSelector((state) => state.settings.log.logged);
  const dispatch = useDispatch();
  const isDev = useSelector((state) => state.settings.log.isDev);
  const isRecruiter = useSelector((state) => state.settings.log.isRecruiter);

  return (
    <div className="header">
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
                <li className="header__menu--item"><NavLink to="/profil">Profil</NavLink></li>
                <li className="header__menu--item"><NavLink to="/recherche">Recherche</NavLink></li>
              </>
              )}
              {isRecruiter && (
                <>
                  <li className="header__menu--item"><NavLink to="/">Accueil</NavLink></li>
                  <li className="header__menu--item"><NavLink to="/profil">Profil</NavLink></li>
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
                Déconnexion
              </button>
            </Link>
          </>
        )
      }
    </div>
  );
}

export default Header;
