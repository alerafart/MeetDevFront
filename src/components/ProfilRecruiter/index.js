import './recruiterprofil.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import dikkenek from '../../assets/images/dikkenek.jpeg';
import { copyProfilRecToTemp } from '../../actions/profilRecModifyTemp';

function RecruiterProfile() {
  const profilRec = useSelector((state) => state.profilRecruiter);
  const data = profilRec.register;
  // console.log(profilRec);
  // // const data = useSelector((state) => state.profilRecruiter.register);
  // const { data } = profilRec;
  const dispatch = useDispatch();

  // useEffect(() => {

  // });

  function handlecopy() {
    dispatch(copyProfilRecToTemp(profilRec));
  }

  return (

    <div className="profilrecruiter">
      <h2 className="profilrecruiter__title">
        fiche recruteur
      </h2>
      <header className="profilrecruiter__header">
        <div className="profilrecruiter__header__cadre">
          <img
            className="profilrecruiter__header__cadre--img"
            src={dikkenek}
            alt="logo de l'entreprise"
          />
        </div>
        <div className="profilrecruiter__header__about">
          <h3 className="profilrecruiter__header__about--label">
            A Propos
          </h3>
          <h4 className="profilrecruiter__header__about--firms"> {data.firms} </h4>
          <h4 className="profilrecruiter__header__about--name">{data.firstname} {data.lastname}</h4>
          <h4 className="profilrecruiter__header__about--city">{data.city}</h4>
          <p className="profilrecruiter__header__about--description">{data.description} test description</p>
        </div>
        {/* <p className="profil__informations--aboutme">About us TODO</p>
          <p className="profil__informations--description">
          Je suis directeur et sales marketing manager des abattoirs d'anderlecht TODO</p> */}

      </header>

      <div className="profilrecruiter__container">
        <div className="profilrecruiter__informations">
          <h3 className="profilrecruiter__informations--label">
            Informations
          </h3>
          <div className="profilrecruiter__informations__item">
            <div className="profilrecruiter__informations__item--label"> Tél:
            </div>
            <div className="profilrecruiter__informations__item--color">0{data.phone}
            </div>
          </div>
          <div className="profilrecruiter__informations__item">
            <div className="profilrecruiter__informations__item--label"> Adresse:
            </div>
            <div className="profilrecruiter__informations__item--black">{data.zipCode} {data.city}
            </div>
          </div>
          <div className="profilrecruiter__informations__item">
            <div className="profilrecruiter__informations__item--label"> E-mail:
            </div>
            <div className="profilrecruiter__informations__item--color">{data.email}
            </div>
          </div>
          <div className="profilrecruiter__informations__item">
            <div className="profilrecruiter__informations__item--label"> website:
            </div>
            <div className="profilrecruiter__informations__item--color">{data.website} website en dur
            </div>
          </div>

        </div>
      </div>

      <div className="profilrecruiter__modify">
        <Link to="/modifier">
          <button
            className="profilrecruiter__modify--form"
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
  );
}

export default RecruiterProfile;
