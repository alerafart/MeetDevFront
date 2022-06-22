// == Import npm
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import all avatars
import { FaGithub } from 'react-icons/fa';
import manAvatar1 from '../../assets/avatars/avatar_man1.png';
import manAvatar2 from '../../assets/avatars/avatar_man2.png';
import manAvatar3 from '../../assets/avatars/avatar_man3.png';
import manAvatar4 from '../../assets/avatars/avatar_man4.png';
import womanAvatar1 from '../../assets/avatars/avatar_woman1.png';
import womanAvatar2 from '../../assets/avatars/avatar_woman2.png';
import womanAvatar3 from '../../assets/avatars/avatar_woman3.png';
import womanAvatar4 from '../../assets/avatars/avatar_woman4.png';

// == Import component
import ModalChooseAvatar from './ModalChooseAvatar';
import ModalChooseStack from './ModalChooseStack';
// == Import action creator
import { searchCity, validateModifyDev } from '../../actions/middleware';
import {
  searchCityDisplay,
  searchCityClose,
  chooseAvatarModal,
  toggleModalChooseTechnologie,
} from '../../actions/settings';
import { tempModifDevProfil } from '../../actions/profilDevModifyTemp';

// == Import styles
import './profildevmodify.scss';
// == Component
function ModifyDev() {
  const data = useSelector((state) => state.profilDevModifyTemp.register);
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch();
  // state to know user data

  // state to know user city
  const displaySearchCity = useSelector((state) => state.settings.navigation.displaySearchCity);
  const resultSearchCity = useSelector((state) => state.settings.navigation.resultSearchCity);
  // state to know user avatar
  const displayChooseAvatarModal = useSelector(
    (state) => state.settings.navigation.chooseAvatarModal,
  );
  // state to know user stack
  const displayChooseStackModal = useSelector(
    (state) => state.settings.navigation.chooseTechnologieModal,
  );

  // select how avatar to display
  let avatar;
  if (data.profilePicture === 'manAvatar1') {
    avatar = manAvatar1;
  }
  if (data.profilePicture === 'manAvatar2') {
    avatar = manAvatar2;
  }
  if (data.profilePicture === 'manAvatar3') {
    avatar = manAvatar3;
  }
  if (data.profilePicture === 'manAvatar4') {
    avatar = manAvatar4;
  }
  if (data.profilePicture === 'womanAvatar1') {
    avatar = womanAvatar1;
  }
  if (data.profilePicture === 'womanAvatar2') {
    avatar = womanAvatar2;
  }
  if (data.profilePicture === 'womanAvatar3') {
    avatar = womanAvatar3;
  }
  if (data.profilePicture === 'womanAvatar4') {
    avatar = womanAvatar4;
  }
  if (data.profilePicture === '') {
    avatar = '';
  }
  // function to change user data value
  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(tempModifDevProfil(value, name));
  }

  return (
    <div className={isDark ? 'inscription dark' : 'inscription'}>
      {
              displayChooseStackModal && <ModalChooseStack />
            }
      <h2 className="inscription__title">
        Votre Profil
      </h2>
      <form className="inscription__form">
        <div className="inscription__form__avatarContainer">
          {
                  avatar && (
                    <img src={avatar} alt="" />
                  )
                }
          {/* button to open avatar modal */}
          <button
            type="button"
            onClick={() => {
              window.scrollTo(0, 0);
              dispatch(chooseAvatarModal());
            }}
          >Choisir son avatar
          </button>
          {
                  displayChooseAvatarModal && <ModalChooseAvatar />
                }
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Prénom
          </div>
          <input className="inscription__form__champ--input" type="text" name="firstname" value={data.firstname} onChange={handleChangeForm} />
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Nom
          </div>
          <input className="inscription__form__champ--input" type="text" name="lastname" value={data.lastname} onChange={handleChangeForm} />
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Ville
          </div>
          <input
            className="inscription__form__champ--input"
            type="text"
            name="city"
            value={data.city}
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
                                // console.log(e.properties.postcode);
                                // console.log(Math.floor((e.properties.postcode) / 1000));

                                dispatch(tempModifDevProfil(e.properties.city, 'city'));
                                dispatch(tempModifDevProfil(e.properties.postcode, 'zipCode'));
                                dispatch(tempModifDevProfil((Math.floor((e.properties.postcode) / 1000)), 'departement'));

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
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Tél
          </div>
          <input className="inscription__form__champ--input" type="number" name="phone" value={data.phone} onChange={handleChangeForm} />
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Label
          </div>
          <input className="inscription__form__champ--input" type="text" name="label" value={data.label} onChange={handleChangeForm} placeholder="Exemple: Developper Front-end React" />
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Description
          </div>
          <textarea className="inscription__form__champ--input" type="text" name="description" value={data.description} onChange={handleChangeForm} placeholder="Petite présentation/introduction sur vous" />
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Mail
          </div>
          <input className="inscription__form__champ--input" type="mail" name="email" value={data.email} />
        </div>
        {/* <div className="inscription__form__champ">
          <div className={isDark ?
          'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Vérif Mail
          </div>
          <input className="inscription__form__champ--input"
          type="mail" name="emailTest" value={data.emailTest} onChange={handleChangeForm} />
        </div> */}
        {/* <div className="inscription__form__champ">
          <div className={isDark ?
          'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Mdp
          </div>
          <input className="inscription__form__champ--input"
          type="password" name="password" value={data.password} o />
        </div> */}
        {/* <div className="inscription__form__champ">
          <div className={isDark ?
           'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Vérif Mdp
          </div>
          <input className="inscription__form__champ--input"
          type="password" name="verifypassword"
          value={data.verifpassword} onChange={handleChangeForm} />
        </div> */}
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Anglais
          </div>
          <select value={data.english} type="text" className="inscription__form__champ--input" name="english" onChange={handleChangeForm}>
            <option value="">{null}</option>
            <option value="fluent">Bilingue</option>
            <option value="middle">Intermédiare</option>
            <option value="write">Ecrit</option>
          </select>
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Salaire annuel
          </div>
          <select name="salary" type="number" defaultValue={data.salary} className="inscription__form__champ--input" onChange={handleChangeForm}>
            <option value="">{null}</option>
            <option value={30}>30 k€</option>
            <option value={40}>40 k€</option>
            <option value={50}>50 k€</option>
          </select>
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Stack
          </div>
          {/* button to open stack modal */}
          <button
            type="button"
            className="inscription__form__champ--stack"
            onClick={() => {
              window.scrollTo(0, 0);
              dispatch(toggleModalChooseTechnologie());
            }}
          >
            Choisir ma Stack
          </button>

          {/* <select value={data.technology} className="inscription__form__champ--input"
          name="technology" onChange={handleChangeForm}>
                  <option value="">{null}</option>
                  <option>React</option>
                  <option>Symfony</option>
                </select> */}
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Expérience
          </div>
          <div className="inscription__form__champ--radio" onChange={handleChangeForm}>
            <label className={isDark ? 'inscription__form__champ--radio--item dark' : 'inscription__form__champ--radio--item'} htmlFor="experience">
              <input type="radio" value="1" name="experience" checked={data.experience === 1} />
              - 1 an
            </label>
            <label className={isDark ? 'inscription__form__champ--radio--item dark' : 'inscription__form__champ--radio--item'} htmlFor="exp2">
              <input type="radio" value="2" name="experience" checked={data.experience === 2} />
              1 à 3 ans
            </label>
            <label className={isDark ? 'inscription__form__champ--radio--item dark' : 'inscription__form__champ--radio--item'} htmlFor="exp3">
              <input type="radio" name="experience" value="3" checked={data.experience === 3} />
              + 3 ans
            </label>
          </div>
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Age
          </div>
          <input className="inscription__form__champ--input" type="number" name="age" value={data.age} onChange={handleChangeForm} />
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            Disponibilité
          </div>
          <select defaultValue={data.availability} type="boolean" className="inscription__form__champ--input" name="availability" onChange={handleChangeForm}>
            <option value="">{null}</option>
            <option value={1}>Immédiate</option>
            <option value={0}>Prochainement</option>
          </select>
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            {/* <img
              className="inscription__form__champ--img"
              src={github}
              alt="logo github"
            /> */}

            <FaGithub className={isDark ? 'inscription__form__champ--label--img' : 'inscription__form__champ--img'} />

          </div>
          <input name="github" value={data.github} className="inscription__form__champ--input" type="text" onChange={handleChangeForm} />
        </div>
        <div className="inscription__form__champ">
          <div className={isDark ? 'inscription__form__champ--label dark' : 'inscription__form__champ--label'}>
            PortFolio
          </div>
          <input name="portfolio" className="inscription__form__champ--input" type="text" value={data.portfolio} onChange={handleChangeForm} />
        </div>
        <div className="inscription__form__champ">
          {/* <div className="inscription__form__champ--label">
                  PortFolio
                </div>
                <input name="portfolio" className="inscription__form__champ--input"
                type="text" value={register.portfolio} onChange={handleChangeForm} /> */}
        </div>
        <div className="inscription__form__buttons">
          <Link to="/profil">
            {/* button to save data and display user profile */}
            <button
              type="submit"
              className="inscription__form__buttons__button--valid"
              onClick={() => {
                // dispatch(inscriptionDev());
                // dispatch(toggleWindowLog());
                dispatch(validateModifyDev());
                window.scrollTo(0, 0);
              }}
            >
              Valider
            </button>
          </Link>
          <Link to="/profil">
            {/* button close window and cancel changes */}
            <button
              type="button"
              className="inscription__form__buttons__button--cancel"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >Annuler
            </button>
          </Link>
        </div>
      </form>

    </div>
  );
}

export default ModifyDev;
