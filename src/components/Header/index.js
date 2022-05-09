import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import rocket from '../../assets/images/rocket.png';
import { login, logout } from '../../actions/settings';

function Header({
  setDevelopper, setRecruiter, recruiter, developper,
}) {
  const logged = useSelector((state) => state.settings.log.logged);
  const dispatch = useDispatch();

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
              dispatch(login());
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
              {developper && (
              <>
                <li className="header__menu--item"><NavLink to="/">Accueil</NavLink></li>
                <li className="header__menu--item"><NavLink to="/profil">Profil</NavLink></li>
                <li className="header__menu--item"><NavLink to="/recherche">Recherche</NavLink></li>
              </>
              )}
              {recruiter && (
                <>
                  <li className="header__menu--item"><NavLink to="/">Accueil</NavLink></li>
                  <li className="header__menu--item"><NavLink to="/recruiter-profile">Profil</NavLink></li>
                  <li className="header__menu--item"><NavLink to="/recherche">Recherche</NavLink></li>
                  <li className="header__menu--item"><NavLink to="/favoris">Favoris</NavLink></li>
                </>
              )}
            </ul>
            <button
              type="button"
              className="header__button"
              onClick={() => {
                dispatch(logout());
                setRecruiter(false);
                setDevelopper(false);
              }}
            >
              Déconnexion
            </button>
          </>
        )
      }
    </div>
  );
}

Header.propTypes = {
  developper: PropTypes.bool.isRequired,
  setDevelopper: PropTypes.func.isRequired,
  recruiter: PropTypes.bool.isRequired,
  setRecruiter: PropTypes.func.isRequired,
  // setOpenModal: PropTypes.func.isRequired,
};

export default Header;
