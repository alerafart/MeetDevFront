import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        Meet Dev
      </div>
      <ul className="header_menu">
        <li className="header_menu-item"><Link to="/">Accueil</Link></li>
        <li className="header_menu-item"><Link to="/Profil">Profil</Link></li>
        <li className="header_menu-item"><Link to="/recherche">Recherche</Link></li>
        <li className="header_menu-item"><Link to="/favoris">Favoris</Link></li>
        <li className="header_menu-item"><Link to="/inscription">Inscription</Link></li>
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
