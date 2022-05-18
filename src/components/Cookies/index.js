// styles
import './cookies.scss';

function Cookies() {
  return (
    <div className="cookies">
      <h3 className="cookies__title">Nous utilisons des cookies</h3>
      <p className="cookies__content">Nous utilisons des cookies et d'autres technologies de suivi pour améliorer
        votre expérience de navigation sur notre site, pour vous montrer un contenu personnalisé
        et des publicités ciblées, pour analyser le trafic de notre site
        et pour comprendre la provenance de nos visiteurs.
      </p>
      <div className="cookies__button">
        <button type="button" className="cookies__button--agree">J'accepte</button>
        <button type="button" className="cookies__button--disagree">Je refuse</button>
      </div>

      <div id="all" />
    </div>
  );
}

export default Cookies;
