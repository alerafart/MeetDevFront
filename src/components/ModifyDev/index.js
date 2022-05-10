import './profildevmodify.scss';
import { Link } from 'react-router-dom';
import man from '../../assets/images/men.png';
import woman from '../../assets/images/woman.png';
import github from '../../assets/images/github.png';

function ModifyDev() {
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
      <form className="profilDevModify__form">
        <div className="profilDevModify__form--picture--left">
          <input type="radio" value="men" checked />
          <img
            className="profilDevModify__form--picture--img"
            src={man}
            alt="logo homme"
          />
        </div>
        <div className="profilDevModify__form--picture--right">
          <input type="radio" value="woman" />
          <img
            className="profilDevModify__form--picture--img"
            src={woman}
            alt="logo femme"
          />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Prénom
          </div>
          <input className="profilDevModify__form__champ--input" type="text" value="Agathe" />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Disponibilité
          </div>
          <select className="profilDevModify__form__champ--input">
            <option value="immediate" selected>Immédiate</option>
            <option value="soon">Prochainement</option>
          </select>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Nom
          </div>
          <input className="profilDevModify__form__champ--input" type="text" value="Feeling" />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Anglais
          </div>
          <select className="profilDevModify__form__champ--input">
            <option value="anglais" selected>Courant</option>
            <option value="semianglais">Intermédiare</option>
            <option value="semianglais">Ecrit</option>
            <option value="semianglais">N.C</option>
          </select>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Âge
          </div>
          <input className="profilDevModify__form__champ--input" type="text" value={29} />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Salaire annuel
          </div>
          <select className="profilDevModify__form__champ--input">
            <option value={30} selected>30 <span>k€</span></option>
            <option value={40} selected>40 <span>k€</span></option>
          </select>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Ville
          </div>
          <input className="profilDevModify__form__champ--input" type="text" value="Lyon" />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Langage
          </div>
          <select className="profilDevModify__form__champ--input">
            <option value="CSS" selected>CSS</option>
            <option value="HTML">HTML</option>
          </select>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Tél
          </div>
          <input className="profilDevModify__form__champ--input" type="text" value="" />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Technologie
          </div>
          <select className="profilDevModify__form__champ--input">
            <option value="React" selected>React</option>
            <option value="Symfony">Symfony</option>
          </select>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Mail
          </div>
          <input className="profilDevModify__form__champ--input" type="text" value="agathe.feeling@gmail.com" />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Expérience
          </div>
          <div className="profilDevModify__form__champ--radio">
            <label className="profilDevModify__form__champ--radio--item" htmlFor="exp1">
              <input checked type="radio" value="exp1" name="exp1" />
              - 1 an
            </label>
            <label className="profilDevModify__form__champ--radio--item" htmlFor="exp2">
              <input type="radio" value="exp2" name="exp2" />
              1 à 3 ans
            </label>
            <label className="profilDevModify__form__champ--radio--item" htmlFor="exp3">
              <input type="radio" value="exp3" name="exp3" />
              + 3 ans
            </label>
          </div>
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Mdp
          </div>
          <input className="profilDevModify__form__champ--input" type="password" value="" />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            <img
              className="profilDevModify__form__champ--img"
              src={github}
              alt="logo github"
            />
          </div>
          <input className="profilDevModify__form__champ--input" type="text" value="agathe.feeling.github.fr" />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            Vérif Mdp
          </div>
          <input className="profilDevModify__form__champ--input" type="password" value="" />
        </div>
        <div className="profilDevModify__form__champ">
          <div className="profilDevModify__form__champ--label">
            PortFolio
          </div>
          <input className="profilDevModify__form__champ--input" type="text" value="www.agathe.feeling.fr" />
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
