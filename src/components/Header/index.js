import { NavLink } from 'react-router-dom';
import './header.scss';
import rocket from '../../assets/images/rocket.png';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          className="header__logo--img"
          src={rocket}
          alt="logo fusée"
        />
        Meet Dev
      </div>
      <ul className="header__menu">
        <li className="header__menu--item"><NavLink to="/">Accueil</NavLink></li>
        <li className="header__menu--item"><NavLink to="/profil">Profil</NavLink></li>
        <li className="header__menu--item"><NavLink to="/recherche">Recherche</NavLink></li>
        <li className="header__menu--item"><NavLink to="/favoris">Favoris</NavLink></li>
        <li className="header__menu--item"><NavLink to="/inscription">Inscription</NavLink></li>
      </ul>
      <button
        type="button"
        className="header__button"
      >
        Déconnexion
      </button>
    </div>
  );
}

export default Header;
