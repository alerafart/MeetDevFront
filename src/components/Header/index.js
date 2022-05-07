import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.scss';
import rocket from '../../assets/images/rocket.png';

function Header({
  connected, setConnected, setDevelopper, setRecruiter, recruiter, developper,
}) {
  return (
    <div className="header">
      { !connected && (
        <>
          <div className="header__enSavoirPlus">
            <Link to="/en-savoir-plus">En savoir plus</Link>
          </div>
          <ul className="header__menu">
            <li className="header__menu--item"><NavLink to="/">Accueil</NavLink></li>
          </ul>
          <button
            type="button"
            className="header__button"
          >
            Connexion
          </button>
        </>
      )}
      {
        connected && (
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
              </>
              )}
              {recruiter && (
                <>
                  <li className="header__menu--item"><NavLink to="/">Accueil</NavLink></li>
                  <li className="header__menu--item"><NavLink to="/profil">Profil</NavLink></li>
                  <li className="header__menu--item"><NavLink to="/recherche">Recherche</NavLink></li>
                  <li className="header__menu--item"><NavLink to="/favoris">Favoris</NavLink></li>
                </>
              )}
            </ul>
            <button
              type="button"
              className="header__button"
              onClick={() => {
                setConnected(false);
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
  connected: PropTypes.bool.isRequired,
  setConnected: PropTypes.func.isRequired,
  developper: PropTypes.bool.isRequired,
  setDevelopper: PropTypes.func.isRequired,
  recruiter: PropTypes.bool.isRequired,
  setRecruiter: PropTypes.func.isRequired,
  // role: PropTypes.string.isRequired,
  // setRole: PropTypes.func.isRequired,
};

export default Header;
