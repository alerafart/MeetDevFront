import './profildevmodify.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import man from '../../assets/images/men.png';
import woman from '../../assets/images/woman.png';
import github from '../../assets/images/github.png';
import { registerDev } from '../../actions/formRegisterDev';

function ModifyDev() {
  const register = useSelector((state) => state.formRegisterDev.register);
  const dispatch = useDispatch();

  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(registerDev(value, name));
  }

  return (
    <div className="profilDevModify">
      <h2 className="profilDevModify__title">
        Votre Profil
      </h2>
      <div className="profilDevModify__header">
        <input
          className="profilDevModify__header--avatar"
          type="file"
          name="profile__photo"
          placeholder="Photo"
          required=""
          capture
        />
      </div>
      <form className="profilDevModify__form" onChange={handleChangeForm}>
        <div className="profilDevModify__form--picture--left">
          <input type="radio" name="gender" value="man" checked={register.gender === 'man'} />
          <img
            className="profilDevModify__form--picture--img"
            src={man}
            alt="logo homme"
          />
        </div>
        <div className="profilDevModify__form--picture--right">
          <input type="radio" name="gender" value="woman" checked={register.gender === 'woman'} />
          <img
            className="profilDevModify__form--picture--img"
            src={woman}
            alt="logo femme"
          />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label" type="text" name="firstname" value={register.firstname}>
            Prénom
          </div>
          <input className="profilDevModify__form__champ--input" type="text" name="firstname" value={register.firstname} />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Disponibilité
          </div>
          <select Value={register.availability} className="profilDevModify__form__champ--input" name="availability" onChange={handleChangeForm}>
            <option value="">{null}</option>
            <option value="immediate">Immédiate</option>
            <option value="soon">Prochainement</option>
          </select>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Nom
          </div>
          <input className="profilDevModify__form__champ--input" type="text" name="lastname" value={register.lastname} />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Anglais
          </div>
          <select className="profilDevModify__form__champ--input" value={register.english} name="english">
            <option value="">{null}</option>
            <option value="fluent">Anglais</option>
            <option value="middle">Anglais intermédiare</option>
            <option value="french">Français</option>
          </select>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Âge
          </div>
          <input className="profilDevModify__form__champ--input" type="text" name="age" value={register.age} />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Salaire annuel
          </div>
          <select className="profilDevModify__form__champ--input" name="salary">
            <option value="">{null}</option>
            <option value={30}>30 k€</option>
            <option value={40}>40 k€</option>
          </select>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Ville
          </div>
          <input className="profilDevModify__form__champ--input" type="text" name="city" value={register.city} />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Langage
          </div>
          <select multiple className="profilDevModify__form__champ--input" value={register.languages} name="languages">
            <option value="">{null}</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
          </select>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Tél
          </div>
          <input className="profilDevModify__form__champ--input" type="text" name="phone" value={register.phone} />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Technologie
          </div>
          <select className="profilDevModify__form__champ--input" value={register.technology} name="technology">
            <option value="">{null}</option>
            <option>React</option>
            <option>Symfony</option>
          </select>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Mail
          </div>
          <input className="profilDevModify__form__champ--input" type="text" name="mail" value={register.mail} />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Expérience
          </div>
          <div className="profilDevModify__form__champ--radio">
            <label className="profilDevModify__form__champ--radio--item" htmlFor="exp1">
              <input type="radio" value="1" name="experience" defaultchecked={register.experience === '- 1 an'} />
              - 1 an
            </label>
            <label className="profilDevModify__form__champ--radio--item" htmlFor="exp2">
              <input type="radio" value="2" name="experience" checked={register.experience === '1 à 3 ans'} />
              1 à 3 ans
            </label>
            <label className="profilDevModify__form__champ--radio--item" htmlFor="exp3">
              <input type="radio" name="experience" value="3" checked={register.experience === '+ 3ans'} />
              + 3 ans
            </label>
          </div>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Mdp
          </div>
          <input className="profilDevModify__form__champ--input" type="password" name="password" value={register.password} />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            <img
              className="profilDevModify__form__champ--img"
              src={github}
              alt="logo github"
            />
          </div>
          <input className="profilDevModify__form__champ--input" name="github" value={register.github} type="text" />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Vérif Mdp
          </div>
          <input className="profilDevModify__form__champ--input" type="password" name="verifypassword" value={register.verifpassword} />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            PortFolio
          </div>
          <input className="profilDevModify__form__champ--input" name="portfolio" type="text" value={register.portfolio} />
        </div>
        <div className="profilDevModify__form__buttons">
          <Link to="/profil">
            <button type="submit" className="profilDevModify__form__buttons__button--valid">Valider </button>
          </Link>
          <Link to="/profil">
            <button type="submit" className="profilDevModify__form__buttons__button--cancel">Annuler</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ModifyDev;
