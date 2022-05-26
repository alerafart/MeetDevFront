import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import rocket from '../../assets/images/rocket.png';
import {
  logout, toggleWindowLog, setFromAway, setFromSearchRoute, setFromFavoritesRoute, toggleDarkMode,
} from '../../actions/settings';
import { recruiterFavorites } from '../../actions/middleware';

function NavigationDesktop() {
  const logged = useSelector((state) => state.settings.log.logged);
  const isDev = useSelector((state) => state.settings.log.isDev);
  const isRecruiter = useSelector((state) => state.settings.log.isRecruiter);
  const isDarkMode = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch();
  return (
    <div className={isDarkMode ? 'header dark' : 'header'}>
      {/* if not Logged display connexion button + en Savoir +*/}
      { !logged && (
        <>
          <div className="header__enSavoirPlus">
            <Link to="/en-savoir-plus">En savoir plus</Link>
          </div>
          {
            isDarkMode && (
              <div onClick={() => {
                dispatch(toggleDarkMode());
              }}
              >
                <MdDarkMode className={isDarkMode ? 'header__menu__clearModeIcon dark' : 'header__menu__clearModeIcon'} />
              </div>
            )
          }
          {
            !isDarkMode && (
              <div onClick={() => {
                dispatch(toggleDarkMode());
              }}
              >
                <MdOutlineDarkMode className={isDarkMode ? 'header__menu__clearModeIcon dark' : 'header__menu__clearModeIcon'} />

              </div>
            )
          }
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
      {/* If connected display navbar as connected */}
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
            <ul className={isDarkMode ? 'header__menu dark' : 'header__menu'}>
              {/* if i'm Dev display this navbar */}
              {isDev && (
              <>
                <li
                  className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}"
                  onClick={() => dispatch(setFromAway())}
                ><NavLink to="/profil">Profil</NavLink>
                </li>
                <li className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}" onClick={() => dispatch(setFromSearchRoute())}><NavLink to="/recherche">Recherche</NavLink></li>
              </>
              )}
              {/* if i'm Recruiter display this navbar */}
              {isRecruiter && (
                <>
                  <li className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}" onClick={() => dispatch(setFromAway())}><NavLink to="/profil">Profil</NavLink></li>
                  <li className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}" onClick={() => dispatch(setFromSearchRoute())}><NavLink to="/recherche">Recherche</NavLink></li>
                  <li
                    className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}"
                    onClick={() => {
                      dispatch(setFromFavoritesRoute());
                      dispatch(recruiterFavorites());
                    }}
                  >
                    <NavLink to="/favoris">Favoris</NavLink>
                  </li>
                </>
              )}
              {
            isDarkMode && (
              <MdDarkMode
                className="header__menu__darkModeIcon"
                onClick={() => {
                  dispatch(toggleDarkMode());
                }}
              />
            )
          }
              {
            !isDarkMode && (
              <MdOutlineDarkMode
                className="header__menu__clearModeIcon"
                onClick={() => {
                  dispatch(toggleDarkMode());
                }}
              />
            )
          }
            </ul>
            {/* if i'm connected display deconnexion Button */}
            <Link to="/">
              <button
                type="button"
                className="header__button"
                onClick={() => {
                  dispatch(logout());
                  dispatch(setFromAway());
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

export default NavigationDesktop;
