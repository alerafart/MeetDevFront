import './footer.scss';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__contact">
        Contact
      </div>
      <div className="footer__mentionslegales">
        Mentions legales
      </div>
      <div className="footer__logos">
        <img
          className="footer__logos--img"
          src={instagram}
          alt="logo instagram"
        />
        <img
          className="footer__logos--img"
          src={twitter}
          alt="logo twitter"
        />
        <img
          className="footer__logos--img"
          src={facebook}
          alt="logo facebook"
        />

      </div>
    </div>
  );
}

export default Footer;
