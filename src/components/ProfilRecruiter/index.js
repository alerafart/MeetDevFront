import './recruiterprofil.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dikkenek from '../../assets/images/dikkenek.jpeg';

function RecruiterProfile() {
  const data = useSelector((state) => state.profilRecruiter.register);

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

        <h3 className="profil__informations--name">{data.firstname} {data.lastname}</h3>
        <p className="profil__informations--localisation">{data.city}</p>

        <p className="profil__informations--aboutme">About us TODO</p>
        <p className="profil__informations--description"> Je suis directeur et sales marketing manager des abattoirs d'anderlecht TODO</p>
        <p className="profil__informations--email">{data.email}</p>
        <p className="profil__informations--phone">{data.phone}</p>
      </div>
      <div className="profil__modify">

        <button
          className="profil__modify__form"
          type="button"
        >
          <Link to="/modifier">Modifier</Link>
        </button>

      </div>
    </div>

  );
}

export default RecruiterProfile;
