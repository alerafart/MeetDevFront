// styles
import './ensavoirplus.scss';

function EnSavoirPlus() {
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
          </p><br />
          <p>Notre application est basée sur le principe du « dating site »
            et de The Voice :
          </p>
          <p>«je te veux dans mon équipe»!</p> <br />
          <p>Vous connaissez les sites des rencontres comme «Tinder»…</p> <br />
          <p>Et bien, maintenant il y a </p><br />
          <p className="about__slogan">Meet Dev</p><br />
          <p className="about__slogan">LE site de rencontre professionnel
            entre des développeurs et des entreprises.
          </p>
        </div>
      </div>
      <div className="about__dev">
        <h3 className="about__dev--title"> Développeur </h3>
        <div className="about__dev--content">
          <p>Vous avez sûrement regardé les offres d’emplois pour développeur ?</p> <br />
          <p>En 2022, chercher un job de dév sur Internet est difficile,</p>
          <p>les sites d’emploi sont généralistes, ayant une expérience utilisateur compliquée,</p>
          <p>et les sites carrière des entreprises insuffisamment détaillés.
          </p><br />
          <p>ET surtout c’est le développeur qui doit contacter le recruteur.</p><br />
          <p>Pourquoi devrait-on continuer ainsi ?</p><br />
          <p>Notre mission chez Meet Dev est de changer tout cela,
            de mettre en avant votre profil auprès des entreprises,
            afin que ça soit elles qui vous contactent si votre profil les intéressent.
          </p><br />
          <p>Il ne reste plus qu'à vous inscrire, remplir votre profil,
            et attendre qu'une entreprise vous accueille dans son équipe !
          </p><br />
          <p className="about__slogan">Meet Your Future Company !</p>
        </div>
      </div>
      <div className="about__recruiter">
        <h3 className="about__recruiter--title"> Recruteur </h3>
        <div className="about__recruiter--content">
          <p>Vous cherchez des développeurs web?</p> <br />
          <p> Il n’est pas chose aisé de trouver un développeur qui soit proche de son entreprise,
          </p>
          <p>et qui corresponde à ses critères et ses besoins.</p>
          <br />
          <p>Grâce à Meet Dev vous pouvez contacter facilement le candidat qui vous convient,</p>
          <p>vous gagnez du temps car vous n’aurez plus un grand nombre de CV à éplucher,</p>
          <p>ni de nombreuses annonces d’emploi à rédiger.
          </p><br />
          <p>Vous sélectionnez un profil qui vous convient,</p>
          <p>ensuite vous pouvez soit le contacter directement ou bien,</p>
          <p>le garder dans vos favoris pour prendre rendez-vous ultérieurement,</p>
          <p>mais attention les développeurs sont très convoités !
          </p><br />
          <p>Vous devenez grâce à Meet Dev un chasseur de tête hors-pair !
          </p><br />
          <p className="about__slogan">Meet Your Future Developer !</p>
        </div>
      </div>
      <div className="about__us">
        <h3 className="about__us--title"> Qui sommes-nous ? </h3>
        <div className="about__us--content">
          <p>Nous sommes une équipe de 5 développeurs</p><br />
          <p className="about__slogan">Alejandra</p><br /><p>Lead Dev Back</p><p>photo</p><br />
          <p className="about__slogan">Alicia</p><br /><p>Git Master</p><p>photo</p><br />
          <p className="about__slogan">Henri</p><br /><p>Lead Dev Front</p><p>photo</p><br />
          <p className="about__slogan">Sébastien</p><br /><p>Scrum Master</p><p>photo</p><br />
          <p className="about__slogan">Christophe</p><br /><p>Product Owner</p><p>photo</p>
        </div>
      </div>
    </div>
  );
}

export default EnSavoirPlus;
