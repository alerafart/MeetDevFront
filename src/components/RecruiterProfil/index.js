import './recruiterprofil.scss';
import dikkenek from '../../assets/images/dikkenek.jpeg';

function RecruiterProfile() {
  return (
    <div className="profil">
      <div className="profil__leftpart">
        <h2 className="profil__title">
          Votre Profil
        </h2>
        <img
          className="profil__picture__img"
          src={dikkenek}
          alt="logo de l'entreprise"
        />

        <h3 className="profil__informations--name">Claudie FOCAN</h3>
        <p className="profil__informations--localisation">Bruxelles</p>

        <p className="profil__informations--aboutme">About us</p>
        <p className="profil__informations--description"> Je suis directeur et sales marketing manager des abattoirs d'anderlecht</p>
        <p className="profil__informations--email">claudie.focan@lesabattoirsanderlecht.be</p>
        <p className="profil__informations--phone">0607080910</p>
      </div>
      <div className="profil__modify">

        <button
          className="profil__modify__form"
          type="button"
          // onClick={() => setModifyInformation(true)}
        >
          Modifier
        </button>

      </div>
    </div>

  );
}

export default RecruiterProfile;
