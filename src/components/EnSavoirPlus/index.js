// == Import npm
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// == Import action creator
import { logout } from '../../actions/settings';
// == Import styles
import './ensavoirplus.scss';
// == Composant
function EnSavoirPlus() {
  const dispatch = useDispatch();
  return (

    <div className="about">
      <h2 className="about__title">
        En savoir plus
      </h2>
      <div className="about__philosophy">
        <h3 className="about__philosophy--title"> Philosophie </h3>
        <div className="about__philosophy--content">
          <p>Notre site casse le principe de recrutement classique :</p>
          <p>le développeur répond à une annonce du recruteur.
          </p>
          <p>Notre application est basée sur le principe du « dating site »
            et de The Voice :
          </p>
          <p>«Je te veux dans mon équipe»!</p>
          <p>Vous connaissez les sites des rencontres comme «Tinder»…</p>
          <p>Et bien, maintenant il y a </p>
          <p className="about__slogan">Meet Dev</p>
          <p className="about__slogan">LE site de rencontre professionnel
            entre des développeurs et des entreprises.
          </p>
        </div>
      </div>
      <div className="about__dev">
        <h3 className="about__dev--title"> Développeur </h3>
        <div className="about__dev--content">
          <p>Vous avez sûrement regardé les offres d’emplois pour développeur ?</p>
          <p>En 2022, chercher un job de dév sur Internet est difficile,
            les sites d’emploi sont généralistes, ayant une expérience utilisateur compliquée,
            et les sites carrière des entreprises insuffisamment détaillés.
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
          <p className="about__slogan">Meet Your Future Company !</p>
        </div>
      </div>
      <div className="about__recruiter">
        <h3 className="about__recruiter--title"> Recruteur </h3>
        <div className="about__recruiter--content">
          <p>Vous cherchez des développeurs web?</p>
          <p>
            Il n’est pas chose aisé de trouver un développeur qui soit proche de son entreprise,
            et qui corresponde à ses critères et ses besoins.
          </p>
          <p>
            Grâce à Meet Dev vous pouvez contacter facilement le candidat qui vous convient,
            vous gagnez du temps car vous n’aurez plus un grand nombre de CV à éplucher,
            ni de nombreuses annonces d’emploi à rédiger.
          </p>
          <p>
            Vous sélectionnez un profil qui vous convient,
            ensuite vous pouvez soit le contacter directement ou bien,
            le garder dans vos favoris pour prendre rendez-vous ultérieurement.
          </p>
          <p>Mais attention les développeurs sont très convoités !
          </p>
          <p>Vous devenez grâce à Meet Dev un chasseur de tête hors-pair !
          </p>
          <p className="about__slogan">Meet Your Future Developer !</p>
        </div>
      </div>
      <div className="about__us">
        <h3 className="about__us--title"> Qui sommes-nous ? </h3>
        <div className="about__us--content">
          <p>Nous sommes une équipe de 5 développeurs</p>
          <div className="about__us--cards">
            <div className="about__us--container">
              <h4 className="about__us--container--name">Alejandra</h4>
              <p className="about__us--container--role">Lead Dev Back</p>
            </div>
            <div className="about__us--container">
              <h4 className="about__us--container--name">Alicia</h4>
              <p className="about__us--container--role">Git Master</p>
            </div>
            <div className="about__us--container">
              <h4 className="about__us--container--name">Henri</h4>
              <p className="about__us--container--role">Lead Dev Front</p>
            </div>
            <div className="about__us--container">
              <h4 className="about__us--container--name">Sébastien</h4>
              <p className="about__us--container--role">Scrum Master</p>
            </div>
            <div className="about__us--container">
              <h4 className="about__us--container--name">Christophe</h4>
              <p className="about__us--container--role">Product Owner</p>
            </div>

          </div>
          <Link to="/">
            <button
              type="button"
              className="inscription__form__buttons__button--cancel"
              // if click on button return, come back to home page
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
