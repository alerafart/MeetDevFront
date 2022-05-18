import './recruiterprofil.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import dikkenek from '../../assets/images/dikkenek.jpeg';
import { copyProfilRecToTemp } from '../../actions/profilRecModifyTemp';

function RecruiterProfile() {
  const profilRec = useSelector((state) => state.profilRecruiter);
  const data = useSelector((state) => state.profilRecruiter.register);
  const dispatch = useDispatch();

  function handlecopy() {
    dispatch(copyProfilRecToTemp(profilRec));
  }

  return (
    <div className="wrapper">
      <h2 className="banniere">
        Votre Profil
      </h2>
      <div className="profil">
        <div className="profil__leftpart">
          <img
            className="profil__picture__img"
            src={dikkenek}
            alt="logo de l'entreprise"
          />

          <h3 className="profil__informations--name">{data.firstname} {data.lastname}</h3>
          <p className="profil__informations--localisation">{data.city}</p>

          {/* <p className="profil__informations--aboutme">About us TODO</p>
          <p className="profil__informations--description">
          Je suis directeur et sales marketing manager des abattoirs d'anderlecht TODO</p> */}
          <p className="profil__informations--email">{data.email}</p>
          <p className="profil__informations--phone">{data.phone}</p>
        </div>
        <div className="profil__modify">
          <Link to="/modifier">
            <button
              className="profil__modify__form"
              type="button"
              onClick={() => {
                console.log(profilRec);
                dispatch(handlecopy());
              }}
            >
              Modifier
            </button>
          </Link>
        </div>
      </div>

    </div>

  );
}

export default RecruiterProfile;
