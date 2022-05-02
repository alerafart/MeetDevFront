import './header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        Meet Dev
      </div>
      <ul className="header_menu">
        <li className="header_menu-item"><NavLink to="/">Accueil</NavLink></li>
        <li className="header_menu-item"><NavLink to="/dashboard">Profil</NavLink></li>
        <li className="header_menu-item"><NavLink to="/recherche">Recherche</NavLink></li>
        <li className="header_menu-item"><NavLink to="/favoris">Favoris</NavLink></li>
        <li className="header_menu-item"><NavLink to="/inscription">Inscription</NavLink></li>
      </ul>
      <button
        type="button"
        className="header_button"
      >
        Déconnexion
      </button>
    </div>
  );
}

export default Header;
