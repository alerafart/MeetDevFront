// styles
import './homedeveloper.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomeDeveloper({
  setDevelopper, setConnected, developper, recruiter,
}) {
  return (
    <div className="homedeveloper">
      <h3 className="homedeveloper__title">Développeur</h3>
      <div className="homedeveloper__content">
        <div className="homedeveloper__dev--content">
          <p>Vous avez sûrement regardé les offres d’emplois pour développeur ?</p>
          <p>En 2022, chercher un job de dév sur Internet est difficile,</p>
          <p>les sites d’emploi sont généralistes, ayant une expérience utilisateur compliquée,
          </p>
          <p>et les sites carrière des entreprises insuffisamment détaillés.
          </p>
          <p>ET surtout c’est le développeur qui doit contacter le recruteur.</p>
          <p>Pourquoi devrait-on continuer ainsi ?</p>
          <p>Notre mission chez Meet Dev est de changer tout cela,
            de mettre en avant votre profil auprès des entreprises,
            afin que ça soit elles qui vous contactent si votre profil les intéressent.
          </p>
          <p>Il ne reste plus qu'à vous inscrire, remplir votre profil,
            et attendre qu'une entreprise vous accueille dans son équipe !
          </p>
          <p className="homedeveloper__slogan">Meet Your Future Company !</p>
        </div>
      </div>
      <div className="homedeveloper__button">
        <button
          type="button"
          className="homedeveloper__button--inscription"
        >
          <Link to="/inscription" developper={developper} recruiter={recruiter} setConnected={setConnected}>Inscription Gratuite</Link>
        </button>
        <button
          type="button"
          className="homedeveloper__button--login"
          onClick={() => setConnected(true)}
        >
          Connexion
        </button>
        <button
          type="button"
          className="homedeveloper__button--back"
          onClick={() => setDevelopper(false)}
        >
          <Link to="/">Retour</Link>
        </button>
      </div>
    </div>
  );
}

HomeDeveloper.propTypes = {
  // connected: PropTypes.bool.isRequired,
  setConnected: PropTypes.func.isRequired,
  developper: PropTypes.bool.isRequired,
  setDevelopper: PropTypes.func.isRequired,
  recruiter: PropTypes.bool.isRequired,
  // setRecruiter: PropTypes.func.isRequired,
  // role: PropTypes.string.isRequired,
  // setRole: PropTypes.func.isRequired,
};

export default HomeDeveloper;
