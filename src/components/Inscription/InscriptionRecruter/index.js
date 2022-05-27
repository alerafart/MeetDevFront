/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// actions & actions creators
import {
  chooseAvatarModal,
  logout,
  searchCityClose,
  searchCityDisplay,
  setFromInscriptionRoute,
  toggleWindowLog,
} from '../../../actions/settings';
import { registerRecruiter, registerRecruiterCancel } from '../../../actions/formRegisterRecruiter';
import { inscriptionRecruiter, searchCity } from '../../../actions/middleware';
// import all avatars
import companyAvatar1 from '../../../assets/avatars/avatar_company1.png';
import companyAvatar2 from '../../../assets/avatars/avatar_company2.png';
import companyAvatar3 from '../../../assets/avatars/avatar_company3.png';
import companyAvatar4 from '../../../assets/avatars/avatar_company4.png';
import companyAvatar5 from '../../../assets/avatars/avatar_company5.png';
import companyAvatar6 from '../../../assets/avatars/avatar_company6.png';
import ModalChooseAvatar from './ModalChooseAvatar';
// style
import './inscriptionrecruter.scss';

function InscriptionRecruter() {
  const dispatch = useDispatch();
  // State for controlled champs of formulaire
  const register = useSelector((state) => state.formRegisterRecruiter.register);
  const displayChooseAvatarModal = useSelector((state) => state.settings.navigation.chooseAvatarModal);
  const displaySearchCity = useSelector((state) => state.settings.navigation.displaySearchCity);
  const resultSearchCity = useSelector((state) => state.settings.navigation.resultSearchCity);
  const isDark = useSelector((state) => state.settings.navigation.darkMode);

  // function to pass to state (via action creators) the value and name of the current form field
  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(registerRecruiter(value, name));
  }

  // select how avatar to display
  let avatar;
  if (register.profilePicture === 'companyAvatar1') {
    avatar = companyAvatar1;
  }
  if (register.profilePicture === 'companyAvatar2') {
    avatar = companyAvatar2;
  }
  if (register.profilePicture === 'companyAvatar3') {
    avatar = companyAvatar3;
  }
  if (register.profilePicture === 'companyAvatar4') {
    avatar = companyAvatar4;
  }
  if (register.profilePicture === 'companyAvatar5') {
    avatar = companyAvatar5;
  }
  if (register.profilePicture === 'companyAvatar6') {
    avatar = companyAvatar6;
  }
  if (register.profilePicture === '') {
    avatar = '';
  }

  // save in state which route we come from for other display.
  useEffect(() => {
    dispatch(setFromInscriptionRoute());
  });

  return (
    <div className={isDark ? 'inscriptionRecruiter dark' : 'inscriptionRecruiter'}>
      <h2 className="inscriptionRecruiter__title">
        Mes informations
      </h2>

      <form className="inscriptionRecruiter__header">
        <div className="inscriptionRecruiter__form__avatarContainer">
          {
                  avatar && (
                    <img src={avatar} alt="" />
                  )
                }
          <button type="button" onClick={() => dispatch(chooseAvatarModal())}>Ajouter un logo</button>
          {
                  displayChooseAvatarModal && <ModalChooseAvatar />
                }
        </div>
      </form>
      <form className={isDark ? 'inscriptionRecruiter__form dark' : 'inscriptionRecruiter__form'}>
        {/* <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--radio">
            <label className="inscriptionRecruter__form__champ--radio--item" htmlFor="exp1">
              <input type="radio" value="sarl" name="status"
              onChange={handleChangeForm} checked={register.status === 'sarl'} />
              SARL
            </label>
            <label className="inscriptionRecruter__form__champ--radio--item" htmlFor="exp2">
              <input type="radio" value="sas" name="status"
              onChange={handleChangeForm} checked={register.status === 'sas'} />
              SAS
            </label>
            <label className="inscriptionRecruter__form__champ--radio--item" htmlFor="exp3">
              <input type="radio" value="eurl" name="status"
              onChange={handleChangeForm} checked={register.status === 'eurl'} />
              EURL
            </label>
          </div>
        </div> */}
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Prénom
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={register.firstname} name="firstname" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Nom
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={register.lastname} name="lastname" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Entreprise
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={register.firms} name="firms" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Description
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={register.description} name="description" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Ville
          </div>
          <input
            className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'}
            type="text"
            name="city"
            value={register.city}
            onChange={(e) => {
              // controlled form field
              handleChangeForm(e);
              // send request to API with controlled form fiel value
              dispatch(searchCity());
              // display the result of API request under the field input
              dispatch(searchCityDisplay());
            }}
          />
          {
                  displaySearchCity && (
                    <ul className="inscriptionRecruiter__form__champ__searchCity">
                      {
                        resultSearchCity.map(
                          (e) => (
                            <li
                              className="inscriptionRecruiter__form__champ__searchCity--item"
                              onClick={() => {
                                // save postcode and city name in state
                                // console.log(Math.ceil(e.properties.postCode / 1000));
                                console.log(e.properties.postcode);
                                console.log(Math.floor((e.properties.postcode) / 1000));

                                dispatch(registerRecruiter(e.properties.city, 'city'));
                                dispatch(registerRecruiter(e.properties.postcode, 'zipCode'));
                                dispatch(registerRecruiter((Math.floor((e.properties.postcode) / 1000)), 'departement'));

                                // close the result display:
                                dispatch(searchCityClose());
                              }}
                            >
                              {e.properties.postcode}, {e.properties.city}
                            </li>
                          ),
                        )

                        //* console.log(e.properties.postcode, e.properties.city)) */
                      }

                    </ul>
                  )
                }
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Tél
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={register.phone} name="phone" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Site Internet
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={register.website} name="website" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Mail
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="mail" value={register.email} name="email" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Mail Vérification
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="mail" value={register.verifyemail} name="verifyemail" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Mdp
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="password" value={register.password} name="password" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Vérif Mdp
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="password" value={register.verifypassword} name="verifypassword" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__buttons">
          <Link to="/profil">
            <button
              type="submit"
              className="inscriptionRecruiter__form__buttons__button--valid"
              onClick={() => {
                dispatch(inscriptionRecruiter());
                dispatch(toggleWindowLog());
              }}
            >
              Valider
            </button>
          </Link>

          <Link to="/">
            <button
              type="button"
              className={isDark ? 'inscriptionRecruiter__form__buttons__button--cancel dark' : 'inscriptionRecruiter__form__buttons__button--cancel'}
              onClick={() => {
                dispatch(logout());
                dispatch(registerRecruiterCancel());
              }}
            >
              Annuler
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default InscriptionRecruter;
