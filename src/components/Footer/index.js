// == Import : npm
import { Link } from 'react-router-dom';

// == Import logo
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';

// == Style
import './footer.scss';

// == Composant
function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer__link--home">
        <Link to="/">Accueil</Link>
      </div> */}
      <div className="footer__link--contact">
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer__link--mention">
        <Link to="/mentions-legales">Mentions Légales</Link>
      </div>
      <div className="footer__logos">
        <a target="_blank" href="https://www.instagram.com/meet__dev/" rel="noreferrer">
          <img
            className="footer__logos--img"
            src={instagram}
            alt="logo instagram"
          />
        </a>
        <a target="_blank" href="https://www.twitter.com/Meet__Dev" rel="noreferrer">
          <img
            className="footer__logos--img"
            src={twitter}
            alt="logo twitter"
          />
        </a>
        <a target="_blank" href="https://www.facebook.com/Meet-Dev-109179991790732/" rel="noreferrer">
          <img
            className="footer__logos--img"
            src={facebook}
            alt="logo facebook"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
