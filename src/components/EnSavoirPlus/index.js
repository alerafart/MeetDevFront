// == Import
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// == Import action creator
import { isDev, isRecruiter, logout } from '../../actions/settings';
// == Import styles
import './ensavoirplus.scss';
// == Composant
function EnSavoirPlus() {
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch();
  return (

    <div className={isDark ? 'about dark' : 'about'}>
      <h2 className="about__title">
        En savoir plus
      </h2>
      <div className={isDark ? 'about__philosophy dark' : 'about__philosophy'}>
        <h3 className="about__philosophy--title"> Philosophie </h3>
        <div className="about__philosophy--content">
          <p className={isDark ? 'darkP' : 'lightP'}>Notre site casse le principe de recrutement classique : le développeur répond à une annonce du recruteur.</p>
          {/* <p className={isDark ? 'darkP' : 'lightP'}>
          le développeur répond à une annonce du recruteur.
          </p> */}
          <p className={isDark ? 'darkP' : 'lightP'}>Notre application est basée sur le principe du « dating site »
            et de The Voice : «Je te veux dans mon équipe»!
          </p>
          {/* <p className={isDark ? 'darkP' : 'lightP'}>«Je te veux dans mon équipe»!</p> */}
          <p className={isDark ? 'darkP' : 'lightP'}>Vous connaissez les sites des rencontres comme «Tinder»… Et bien, maintenant il y a</p>
          {/* <p className={isDark ? 'darkP' : 'lightP'}>Et bien, maintenant il y a </p> */}
          <p className={isDark ? 'about__slogan dark' : 'about__slogan'}>Meet Dev</p>
          <p className={isDark ? 'about__slogan dark' : 'about__slogan'}>LE site de rencontre professionnel
            entre des développeurs et des entreprises.
          </p>
        </div>
      </div>
      <div className={isDark ? 'about__dev dark' : 'about__dev'}>
        <h3 className="about__dev--title"> Développeur </h3>
        <div className="about__dev--content">
          {/* <p className={isDark ? 'darkP' : 'lightP'}>
          Vous avez sûrement regardé les offres d’emplois pour développeur ?</p> */}
          {/* <p className={isDark ? 'darkP' : 'lightP'}>En 2022,
           chercher un job de dév sur Internet est difficile,
            les sites d’emploi sont généralistes, ayant une expérience utilisateur compliquée,
            et les sites carrière des entreprises insuffisamment détaillés.
          </p> */}
          {/* <p className={isDark ? 'darkP' : ''}>
          ET surtout c’est le développeur qui doit contacter le recruteur.</p>
          <p className={isDark ? 'darkP' : 'lightP'}>Pourquoi devrait-on continuer ainsi ?</p> */}
          <p className={isDark ? 'darkP' : 'lightP'}>Notre mission chez Meet Dev est
            de mettre en avant votre profil auprès des entreprises,
            afin que ça soit elles qui vous contactent si votre profil les intéressent.
          </p>
          <p className={isDark ? 'darkP' : 'lightP'}>Il ne reste plus qu'à vous inscrire, remplir votre profil,
            et attendre qu'une entreprise vous accueille dans son équipe !
          </p>
          <p className={isDark ? 'about__slogan dark' : 'about__slogan'}>Meet Your Future Company !</p>
          <Link to="/inscription">
            {/* button to open inscription page */}
            <button
              type="button"
              className="homedeveloper__button--inscription"
              onClick={() => {
                dispatch(isDev());
              }}
            >
              Inscrire son Profil
            </button>
          </Link>
        </div>
      </div>
      <div className={isDark ? 'about__recruiter dark' : 'about__recruiter'}>
        <h3 className="about__recruiter--title"> Recruteur </h3>
        <div className="about__recruiter--content">
          <p className={isDark ? 'darkP' : 'lightP'}>Vous cherchez des développeurs web?</p>
          <p className={isDark ? 'darkP' : 'lightP'}>
            Il n’est pas chose aisé de trouver un développeur qui soit proche de son entreprise,
            et qui corresponde à ses critères et ses besoins.
          </p>
          <p className={isDark ? 'darkP' : 'lightP'}>
            Grâce à Meet Dev vous pouvez contacter facilement le candidat qui vous convient,
            vous gagnez du temps car vous n’aurez plus un grand nombre de CV à éplucher,
            ni de nombreuses annonces d’emploi à rédiger.
          </p>
          <p className={isDark ? 'darkP' : 'lightP'}>
            Vous sélectionnez un profil qui vous convient,
            ensuite vous pouvez soit le contacter directement ou bien,
            le garder dans vos favoris pour prendre rendez-vous ultérieurement.
          </p>
          <p className={isDark ? 'darkP' : 'lightP'}>Mais attention les développeurs sont très convoités !
          </p>
          <p className={isDark ? 'darkP' : 'lightP'}>Vous devenez grâce à Meet Dev un chasseur de tête hors-pair !
          </p>
          <p className={isDark ? 'about__slogan dark' : 'about__slogan'}>Meet Your Future Developer !</p>
          <Link to="/inscription">
            {/* button to open inscription page */}
            <button
              type="button"
              className="homerecruiter__button--inscription"
              onClick={() => {
                dispatch(isRecruiter());
              }}
            >
              Trouver des Devs
            </button>
          </Link>
        </div>
      </div>
      <div className={isDark ? 'about__us dark' : 'about__us'}>
        <h3 className="about__us--title"> Qui sommes-nous ? </h3>
        <div className="about__us--content">
          <p className={isDark ? 'darkP' : 'lightP'}>Nous sommes une équipe de 5 développeurs</p>
          <div className="about__us--cards">
            <div className="about__us--cards--container">
              <h4 className="about__us--cards--container--name">Alejandra</h4>
              <p className="about__us--cards--container--role">Lead Dev Back</p>
            </div>
            <div className="about__us--cards--container">
              <h4 className="about__us--cards--container--name">Alicia</h4>
              <p className="about__us--cards--container--role">Git Master</p>
            </div>
            <div className="about__us--cards--container">
              <h4 className="about__us--cards--container--name">Henri</h4>
              <p className="about__us--cards--container--role">Lead Dev Front</p>
            </div>
            <div className="about__us--cards--container">
              <h4 className="about__us--cards--container--name">Sébastien</h4>
              <p className="about__us--cards--container--role">Scrum Master</p>
            </div>
            <div className="about__us--cards--container">
              <h4 className="about__us--cards--container--name">Christophe</h4>
              <p className="about__us--cards--container--role">Product Owner</p>
            </div>

          </div>
          <Link to="/">
            <button
              type="button"
              className={isDark ? 'inscription__form__buttons__button--cancel dark' : 'inscription__form__buttons__button--cancel'}
              // if click on button return, come back to the home page
              onClick={() => {
                dispatch(logout());
              }}
            >Retour
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EnSavoirPlus;
