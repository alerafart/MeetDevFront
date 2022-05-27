// styles
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// == Import action creator
import { logout, toggleWindowLog } from '../../../actions/settings';
// == Import styles
import './homedeveloper.scss';
// == Component
function HomeDeveloper() {
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch();
  return (
    <div className={isDark ? 'homedeveloper dark' : 'homedeveloper'}>
      <h3 className="homedeveloper__title">Développeur</h3>
      <div className="homedeveloper__content">
        <div className={isDark ? 'homedeveloper__dev--content dark' : 'homedeveloper__dev--content'}>
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
          <p className={isDark ? 'homedeveloper__slogan dark' : 'homedeveloper__slogan'}>Meet Your Future Company !</p>
        </div>
      </div>
      <div className="homedeveloper__button">
        <Link to="/inscription">
          {/* button to open inscription page */}
          <button
            type="button"
            className="homedeveloper__button--inscription"
          >
            Inscription Gratuite
          </button>
        </Link>
        {/* button to open modal to login */}
        <button
          type="button"
          className="homedeveloper__button--login"
          onClick={() => dispatch(toggleWindowLog())}
        >
          Connexion
        </button>
        {/* button to come back at home page and put logout true in state */}
        <Link to="/">
          <button
            type="button"
            className={isDark ? 'homedeveloper__button--back dark' : 'homedeveloper__button--back'}
            onClick={() => dispatch(logout())}
          >Retour
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeDeveloper;
