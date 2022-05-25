/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './inscription.scss';

// Composants
import InscriptionRecruter from './InscriptionRecruter';
import ModalChooseAvatar from './ModalChooseAvatar';
import ModalChooseStack from './ModalChooseStack';

// data
import github from '../../assets/images/github.png';

// actions & actions creators
import {
  logout, setFromInscriptionRoute, searchCityDisplay, toggleWindowLog, searchCityClose, chooseAvatarModal, toggleModalChooseTechnologie,
} from '../../actions/settings';
import { registerDev } from '../../actions/formRegisterDev';
import { inscriptionDev, searchCity } from '../../actions/middleware';

// import all avatars
import manAvatar1 from '../../assets/avatars/avatar_man1.png';
import manAvatar2 from '../../assets/avatars/avatar_man2.png';
import manAvatar3 from '../../assets/avatars/avatar_man3.png';
import manAvatar4 from '../../assets/avatars/avatar_man4.png';
import womanAvatar1 from '../../assets/avatars/avatar_woman1.png';
import womanAvatar2 from '../../assets/avatars/avatar_woman2.png';
import womanAvatar3 from '../../assets/avatars/avatar_woman3.png';
import womanAvatar4 from '../../assets/avatars/avatar_woman4.png';
// import { toggleExperience } from '../../actions/formSearchDev';

function Inscription() {
  // State for controlled champs of formulaire
  const register = useSelector((state) => state.formRegisterDev.register);
  // State to know if i'm Dev or Recruiter. To Display Inscription page Dev or Recruiter
  const isDev = useSelector((state) => state.settings.log.isDev);
  const isRecruiter = useSelector((state) => state.settings.log.isRecruiter);
  // TODO State search from form + result from api + not done
  const displaySearchCity = useSelector((state) => state.settings.navigation.displaySearchCity);
  const resultSearchCity = useSelector((state) => state.settings.navigation.resultSearchCity);
  const displayChooseAvatarModal = useSelector((state) => state.settings.navigation.chooseAvatarModal);
  const displayChooseStackModal = useSelector((state) => state.settings.navigation.chooseTechnologieModal);
  const dispatch = useDispatch();

  // select how avatar to display
  let avatar;
  if (register.profilePicture === 'manAvatar1') {
    avatar = manAvatar1;
  }
  if (register.profilePicture === 'manAvatar2') {
    avatar = manAvatar2;
  }
  if (register.profilePicture === 'manAvatar3') {
    avatar = manAvatar3;
  }
  if (register.profilePicture === 'manAvatar4') {
    avatar = manAvatar4;
  }
  if (register.profilePicture === 'womanAvatar1') {
    avatar = womanAvatar1;
  }
  if (register.profilePicture === 'womanAvatar2') {
    avatar = womanAvatar2;
  }
  if (register.profilePicture === 'womanAvatar3') {
    avatar = womanAvatar3;
  }
  if (register.profilePicture === 'womanAvatar4') {
    avatar = womanAvatar4;
  }
  if (register.profilePicture === '') {
    avatar = '';
  }
  // save in state which route we come from for other display.
  useEffect(() => {
    dispatch(setFromInscriptionRoute());
  });

  // function to pass to state (via action creators) the value and name of the current form field
  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(registerDev(value, name));
  }

  /* function handleChangeCheckbox(e) {
    dispatch(toggleExperience(e.target.name));
  } */

  return (
    <>
      {
        isRecruiter && <InscriptionRecruter />
      }
      {
        isDev && (

          <div className="inscription">
            {
              displayChooseStackModal && <ModalChooseStack />
            }
            <h2 className="inscription__title">
              Mes informations
            </h2>
            <form className="inscription__form">
              <div className="inscription__form__avatarContainer">
                {
                  avatar && (
                    <img src={avatar} alt="" />
                  )
                }
                <button type="button" onClick={() => dispatch(chooseAvatarModal())}>Choisir son avatar</button>
                {
                  displayChooseAvatarModal && <ModalChooseAvatar />
                }
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Prénom
                </div>
                <input className="inscription__form__champ--input" type="text" name="firstname" value={register.firstname} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Nom
                </div>
                <input className="inscription__form__champ--input" type="text" name="lastname" value={register.lastname} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Ville
                </div>
                <input
                  className="inscription__form__champ--input"
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
                    <ul className="inscription__form__champ__searchCity">
                      {
                        resultSearchCity.map(
                          (e) => (
                            <li
                              className="inscription__form__champ__searchCity--item"
                              onClick={() => {
                                // save postcode and city name in state
                                // console.log(Math.ceil(e.properties.postCode / 1000));
                                console.log(e.properties.postcode);
                                console.log(Math.floor((e.properties.postcode) / 1000));

                                dispatch(registerDev(e.properties.city, 'city'));
                                dispatch(registerDev(e.properties.postcode, 'zipCode'));
                                dispatch(registerDev((Math.floor((e.properties.postcode) / 1000)), 'departement'));

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
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Tél
                </div>
                <input className="inscription__form__champ--input" type="number" name="phone" value={register.phone} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Label
                </div>
                <input className="inscription__form__champ--input" type="text" name="label" value={register.label} onChange={handleChangeForm} placeholder="Exemple: Developper Front-end React" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Description
                </div>
                <textarea className="inscription__form__champ--input" type="mail" name="description" value={register.description} onChange={handleChangeForm} placeholder="Petite présentation/introduction sur vous" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Mail
                </div>
                <input className="inscription__form__champ--input" type="mail" name="email" value={register.email} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Vérif Mail
                </div>
                <input className="inscription__form__champ--input" type="mail" name="emailTest" value={register.emailTest} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Mdp
                </div>
                <input className="inscription__form__champ--input" type="password" name="password" value={register.password} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Vérif Mdp
                </div>
                <input className="inscription__form__champ--input" type="password" name="verifypassword" value={register.verifpassword} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Anglais
                </div>
                <select value={register.english} type="text" className="inscription__form__champ--input" name="english" onChange={handleChangeForm}>
                  <option value="">{null}</option>
                  <option value="fluent">Bilingue</option>
                  <option value="middle">Intermédiare</option>
                  <option value="write">Ecrit</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Salaire annuel
                </div>
                <select name="salary" type="number" defaultValue={register.salary} className="inscription__form__champ--input" onChange={handleChangeForm}>
                  <option value="">{null}</option>
                  <option value={30}>30 k€</option>
                  <option value={40}>40 k€</option>
                  <option value={50}>50 k€</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Stack
                </div>
                <button
                  type="button"
                  className="inscription__form__champ--stack"
                  onClick={() => dispatch(toggleModalChooseTechnologie())}
                >
                  Choisir ma Stack
                </button>

                {/* <select value={register.technology} className="inscription__form__champ--input" name="technology" onChange={handleChangeForm}>
                  <option value="">{null}</option>
                  <option>React</option>
                  <option>Symfony</option>
                </select> */}
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Expérience
                </div>
                <div className="inscription__form__champ--radio" onChange={handleChangeForm}>
                  <label className="inscription__form__champ--radio--item" htmlFor="experience">
                    <input
                      type="radio"
                      value="1"
                      name="experience"
                      checked={register.experience === '1'}
                      // onClick={(e) => handleChangeCheckbox(e)}
                    />
                    - 1 an
                  </label>
                  <label className="inscription__form__champ--radio--item" htmlFor="exp2">
                    <input
                      type="radio"
                      value="2"
                      name="experience"
                      checked={register.experience === '2'}
                      // onClick={(e) => handleChangeCheckbox(e)}
                    />
                    1 à 3 ans
                  </label>
                  <label className="inscription__form__champ--radio--item" htmlFor="exp3">
                    <input
                      type="radio"
                      name="experience"
                      value="3"
                      checked={register.experience === '3'}
                      // onClick={(e) => handleChangeCheckbox(e)}
                    />
                    + 3 ans
                  </label>
                </div>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Age
                </div>
                <input className="inscription__form__champ--input" type="number" name="age" value={register.age} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Disponibilité
                </div>
                <select defaultValue={register.availability} type="boolean" className="inscription__form__champ--input" name="availability" onChange={handleChangeForm}>
                  <option value="">{null}</option>
                  <option value={1}>Immédiate</option>
                  <option value={0}>Prochainement</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  <img
                    className="inscription__form__champ--img"
                    src={github}
                    alt="logo github"
                  />
                </div>
                <input name="github" value={register.github} className="inscription__form__champ--input" type="text" onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  PortFolio
                </div>
                <input name="portfolio" className="inscription__form__champ--input" type="text" value={register.portfolio} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                {/* <div className="inscription__form__champ--label">
                  PortFolio
                </div>
                <input name="portfolio" className="inscription__form__champ--input" type="text" value={register.portfolio} onChange={handleChangeForm} /> */}
              </div>
              <div className="inscription__form__buttons">
                <Link to="/">
                  <button
                    type="submit"
                    className="inscription__form__buttons__button--valid"
                    onClick={() => {
                      dispatch(inscriptionDev());
                      dispatch(toggleWindowLog());
                    }}
                  >
                    Valider
                  </button>
                </Link>
                <Link to="/">
                  <button
                    type="button"
                    className="inscription__form__buttons__button--cancel"
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >Annuler
                  </button>
                </Link>
              </div>
            </form>
          </div>
        )
      }
    </>

  );
}
export default Inscription;
