import './inscription.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import InscriptionRecruter from './InscriptionRecruter';
import man from '../../assets/images/men.png';
import woman from '../../assets/images/woman.png';
import github from '../../assets/images/github.png';
import { login, logout, setFromInscriptionRoute } from '../../actions/settings';
import { registerDev } from '../../actions/formRegisterDev';

function Inscription() {
  const register = useSelector((state) => state.formRegisterDev.register);
  const isDev = useSelector((state) => state.settings.log.isDev);
  const isRecruiter = useSelector((state) => state.settings.log.isRecruiter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFromInscriptionRoute());
  });

  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(registerDev(value, name));
  }

  return (
    <>
      {
        isRecruiter && <InscriptionRecruter />
      }
      {
        isDev && (
          <div className="inscription">
            <h2 className="inscription__title">
              Mes informations
            </h2>
            <div className="inscription__header">
              <input
                className="incription__header--avatar"
                type="file"
                name="profile__photo"
                placeholder="Photo"
                required=""
                capture
              />
            </div>
            <form className="inscription__form">
              <div className="inscription__form--picture--left">
                <input type="radio" name="gender" value="man" onChange={handleChangeForm} checked={register.gender === 'man'} />
                <img
                  className="inscription__form--picture--img"
                  src={man}
                  alt="logo homme"
                />
              </div>
              <div className="inscription__form--picture--right">
                <input type="radio" name="gender" value="woman" onChange={handleChangeForm} checked={register.gender === 'woman'} />
                <img
                  className="inscription__form--picture--img"
                  src={woman}
                  alt="logo femme"
                />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Prénom
                </div>
                <input className="inscription__form__champ--input" type="text" name="firstname" value={register.firstname} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Disponibilité
                </div>
                <select defaultValue={register.availability} className="inscription__form__champ--input" name="availability" onChange={handleChangeForm}>
                  <option value="immediate">Immédiate</option>
                  <option value="prochainement">Prochainement</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Nom
                </div>
                <input className="inscription__form__champ--input" type="text" name="lastname" value={register.lastname} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Anglais
                </div>
                <select value={register.english} className="inscription__form__champ--input" name="english" onChange={handleChangeForm}>
                  <option value="fluent">Anglais</option>
                  <option value="middle">Anglais intermédiare</option>
                  <option value="french">Français</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Âge
                </div>
                <input className="inscription__form__champ--input" type="text" name="age" value={register.age} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Salaire annuel
                </div>
                <select name="salary" className="inscription__form__champ--input" onChange={handleChangeForm}>
                  <option value={30}>30 k€</option>
                  <option value={40}>40 k€</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Ville
                </div>
                <input className="inscription__form__champ--input" type="text" name="city" value={register.city} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Langage
                </div>
                <select value={register.languages} name="languages" className="inscription__form__champ--input" onChange={handleChangeForm}>
                  <option value="css">CSS</option>
                  <option value="html">HTML</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Tél
                </div>
                <input className="inscription__form__champ--input" type="text" name="phone" value={register.phone} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Technologie
                </div>
                <select value={register.technology} className="inscription__form__champ--input" name="technology" onChange={handleChangeForm}>
                  <option>React</option>
                  <option>Symfony</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Mail
                </div>
                <input className="inscription__form__champ--input" type="text" name="mail" value={register.mail} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Expérience
                </div>
                <div className="inscription__form__champ--radio" onChange={handleChangeForm}>
                  <label className="inscription__form__champ--radio--item" htmlFor="exp1">
                    <input type="radio" value="- 1 an" name="experience" checked={register.experience === '- 1 an'} />
                    - 1 an
                  </label>
                  <label className="inscription__form__champ--radio--item" htmlFor="exp2">
                    <input type="radio" value="1 à 3 ans" name="experience" checked={register.experience === '1 à 3 ans'} />
                    1 à 3 ans
                  </label>
                  <label className="inscription__form__champ--radio--item" htmlFor="exp3">
                    <input type="radio" name="experience" value="+ 3ans" checked={register.experience === '+ 3ans'} />
                    + 3 ans
                  </label>
                </div>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Mdp
                </div>
                <input className="inscription__form__champ--input" type="password" name="password" value={register.password} onChange={handleChangeForm} />
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
                  Vérif Mdp
                </div>
                <input className="inscription__form__champ--input" type="password" name="verifypassword" value={register.verifpassword} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  PortFolio
                </div>
                <input name="portfolio" className="inscription__form__champ--input" type="text" value={register.portfolio} onChange={handleChangeForm} />
              </div>
              <div className="inscription__form__buttons">
                <Link to="/profil">
                  <button
                    type="submit"
                    className="inscription__form__buttons__button--valid"
                    onClick={() => {
                      dispatch(login());
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
