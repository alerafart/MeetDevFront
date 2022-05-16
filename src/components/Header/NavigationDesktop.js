import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import rocket from '../../assets/images/rocket.png';
import { logout, toggleWindowLog, setFromAway } from '../../actions/settings';

function NavigationDesktop() {
  const logged = useSelector((state) => state.settings.log.logged);
  const isDev = useSelector((state) => state.settings.log.isDev);
  const isRecruiter = useSelector((state) => state.settings.log.isRecruiter);
  const dispatch = useDispatch();
  return (
    <div className="header">
      {/* if not Logged display connexion button + en Savoir +*/}
      { !logged && (
        <>
          <div className="header__enSavoirPlus">
            <Link to="/en-savoir-plus">En savoir plus</Link>
          </div>
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
            <ul className="header__menu">
              {/* if i'm Dev display this navbar */}
              {isDev && (
              <>
                <li className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}"><NavLink to="/">Accueil</NavLink></li>
                <li className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}" onClick={() => dispatch(setFromAway())}><NavLink to="/profil">Profil</NavLink></li>
                <li className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}"><NavLink to="/recherche">Recherche</NavLink></li>
              </>
              )}
              {/* if i'm Recruiter display this navbar */}
              {isRecruiter && (
                <>
                  <li className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}"><NavLink to="/">Accueil</NavLink></li>
                  <li className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}" onClick={() => dispatch(setFromAway())}><NavLink to="/profil">Profil</NavLink></li>
                  <li className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}"><NavLink to="/recherche">Recherche</NavLink></li>
                  <li className="{({ isActive }) => (isActive ? 'header__menu--item header__menu--item active ' : 'header__menu--item')}"><NavLink to="/favoris">Favoris</NavLink></li>
                </>
              )}
            </ul>
            {/* if i'm connected display deconnexion Button */}
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

export default NavigationDesktop;
