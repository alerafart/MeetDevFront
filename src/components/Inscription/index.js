import './inscription.scss';
import { useState } from 'react';
import InscriptionRecruter from './InscriptionRecruter';
import man from '../../assets/images/men.png';
import woman from '../../assets/images/woman.png';
import github from '../../assets/images/github.png';

function Inscription() {
  // TODO Si false affichage inscription developper
  // TODO si true affichage inscription recruter
  const [recruter] = useState(false);

  return (
    <>
      {
        recruter && <InscriptionRecruter />
      }
      {
        !recruter && (
          <div className="inscription">
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
                <input type="radio" value="men" />
                <img
                  className="inscription__form--picture--img"
                  src={man}
                  alt="logo homme"
                />
              </div>
              <div className="inscription__form--picture--right">
                <input type="radio" value="woman" />
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
                <input className="inscription__form__champ--input" type="text" value="" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Disponibilité
                </div>
                <select className="inscription__form__champ--input">
                  <option value="immediate" selected>Immédiate</option>
                  <option value="soon">Prochainement</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Nom
                </div>
                <input className="inscription__form__champ--input" type="text" value="" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Anglais
                </div>
                <select className="inscription__form__champ--input">
                  <option value="anglais" selected>Anglais</option>
                  <option value="semianglais">Anglais intermédiare</option>
                  <option value="semianglais">Français</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Âge
                </div>
                <input className="inscription__form__champ--input" type="text" value="" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Salaire annuel
                </div>
                <select className="inscription__form__champ--input">
                  <option value={30} selected>30 <span>k€</span></option>
                  <option value={40} selected>40 <span>k€</span></option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Ville
                </div>
                <input className="inscription__form__champ--input" type="text" value="" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Langage
                </div>
                <select className="inscription__form__champ--input">
                  <option value="CSS" selected>CSS</option>
                  <option value="HTML">HTML</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Tél
                </div>
                <input className="inscription__form__champ--input" type="text" value="" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Technologie
                </div>
                <select className="inscription__form__champ--input">
                  <option value="React" selected>React</option>
                  <option value="Symfony">Symfony</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Mail
                </div>
                <input className="inscription__form__champ--input" type="text" value="" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Expérience
                </div>
                <div className="inscription__form__champ--radio">
                  <label className="inscription__form__champ--radio--item" htmlFor="exp1">
                    <input checked type="radio" value="exp1" name="exp1" />
                    - 1 an
                  </label>
                  <label className="inscription__form__champ--radio--item" htmlFor="exp2">
                    <input type="radio" value="exp2" name="exp2" />
                    1 à 3 ans
                  </label>
                  <label className="inscription__form__champ--radio--item" htmlFor="exp3">
                    <input type="radio" value="exp3" name="exp3" />
                    + 3 ans
                  </label>
                </div>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Mdp
                </div>
                <input className="inscription__form__champ--input" type="password" value="" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  <img
                    className="inscription__form__champ--img"
                    src={github}
                    alt="logo github"
                  />
                </div>
                <input className="inscription__form__champ--input" type="text" value="" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Vérif Mdp
                </div>
                <input className="inscription__form__champ--input" type="password" value="" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  PortFolio
                </div>
                <input className="inscription__form__champ--input" type="text" value="" />
              </div>
              <input type="submit" className="inscription__form--button" value="Valider mes informations" />
            </form>
          </div>
        )
      }
    </>

  );
}

export default Inscription;
