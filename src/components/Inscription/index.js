import './inscription.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InscriptionRecruter from './InscriptionRecruter';
import man from '../../assets/images/men.png';
import woman from '../../assets/images/woman.png';
import github from '../../assets/images/github.png';

function Inscription({ developper, recruiter, setConnected }) {
  return (
    <>
      {
        recruiter && <InscriptionRecruter setConnected={setConnected} />
      }
      {
        developper && (
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
                <input type="radio" />
                <img
                  className="inscription__form--picture--img"
                  src={man}
                  alt="logo homme"
                />
              </div>
              <div className="inscription__form--picture--right">
                <input type="radio" />
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
                <input className="inscription__form__champ--input" type="text" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Disponibilité
                </div>
                <select defaultValue="immediate" className="inscription__form__champ--input">
                  <option value="immediate">Immédiate</option>
                  <option value="prochainement">Prochainement</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Nom
                </div>
                <input className="inscription__form__champ--input" type="text" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Anglais
                </div>
                <select className="inscription__form__champ--input">
                  <option selected>Anglais</option>
                  <option>Anglais intermédiare</option>
                  <option>Français</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Âge
                </div>
                <input className="inscription__form__champ--input" type="text" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Salaire annuel
                </div>
                <select className="inscription__form__champ--input">
                  <option selected>30 <span>k€</span></option>
                  <option selected>40 <span>k€</span></option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Ville
                </div>
                <input className="inscription__form__champ--input" type="text" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Langage
                </div>
                <select className="inscription__form__champ--input">
                  <option selected>CSS</option>
                  <option>HTML</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Tél
                </div>
                <input className="inscription__form__champ--input" type="text" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Technologie
                </div>
                <select className="inscription__form__champ--input">
                  <option selected>React</option>
                  <option>Symfony</option>
                </select>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Mail
                </div>
                <input className="inscription__form__champ--input" type="text" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Expérience
                </div>
                <div className="inscription__form__champ--radio">
                  <label className="inscription__form__champ--radio--item" htmlFor="exp1">
                    <input checked type="radio" name="exp1" />
                    - 1 an
                  </label>
                  <label className="inscription__form__champ--radio--item" htmlFor="exp2">
                    <input type="radio" name="exp2" />
                    1 à 3 ans
                  </label>
                  <label className="inscription__form__champ--radio--item" htmlFor="exp3">
                    <input type="radio" name="exp3" />
                    + 3 ans
                  </label>
                </div>
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Mdp
                </div>
                <input className="inscription__form__champ--input" type="password" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  <img
                    className="inscription__form__champ--img"
                    src={github}
                    alt="logo github"
                  />
                </div>
                <input className="inscription__form__champ--input" type="text" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  Vérif Mdp
                </div>
                <input className="inscription__form__champ--input" type="password" />
              </div>
              <div className="inscription__form__champ">
                <div className="inscription__form__champ--label">
                  PortFolio
                </div>
                <input className="inscription__form__champ--input" type="text" />
              </div>
              <div className="inscription__form__buttons">
                <button
                  type="submit"
                  className="inscription__form__buttons__button--valid"
                  onClick={(e) => {
                    e.preventDefault();
                    setConnected(true);
                  }}
                >
                  <Link to="/profil">Valider</Link>
                </button>
                <button
                  type="submit"
                  className="inscription__form__buttons__button--cancel"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                ><Link to="/">Annuler</Link>
                </button>
              </div>
            </form>
          </div>
        )
      }
    </>

  );
}

Inscription.propTypes = {
  // connected: PropTypes.bool.isRequired,
  setConnected: PropTypes.func.isRequired,
  developper: PropTypes.bool.isRequired,
  // setDevelopper: PropTypes.func.isRequired,
  recruiter: PropTypes.bool.isRequired,
  // setRecruiter: PropTypes.func.isRequired,
  // role: PropTypes.string.isRequired,
  // setRole: PropTypes.func.isRequired,
};

export default Inscription;
