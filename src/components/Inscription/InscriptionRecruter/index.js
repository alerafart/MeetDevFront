import './inscriptionrecruter.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../../actions/settings';
import { registerRecruiter, registerRecruiterCancel } from '../../../actions/formRegisterRecruiter';

function InscriptionRecruter() {
  const dispatch = useDispatch();

  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(registerRecruiter(value, name));
  }

  const register = useSelector((state) => state.formRegisterRecruiter.register);
  return (
    <div className="inscriptionRecruter">
      <h2 className="inscriptionRecruter__title">
        Mes informations
      </h2>

      <form className="inscriptionRecruter__header">
        <input
          className="inscriptionRecruter__header--avatar"
          type="file"
          name="logo"
        />
        <button type="button" className="inscriptionRecruter__header--button">Logo entreprise</button>
      </form>
      <form className="inscriptionRecruter__form">
        <div className="inscriptionRecruter__form__champ">
          {/* <div className="inscriptionRecruter__form__champ--label">
            Expérience
          </div> */}
          <div className="inscriptionRecruter__form__champ--radio">
            <label className="inscriptionRecruter__form__champ--radio--item" htmlFor="exp1">
              <input type="radio" value="sarl" name="status" onChange={handleChangeForm} checked={register.status === 'sarl'} />
              SARL
            </label>
            <label className="inscriptionRecruter__form__champ--radio--item" htmlFor="exp2">
              <input type="radio" value="sas" name="status" onChange={handleChangeForm} checked={register.status === 'sas'} />
              SAS
            </label>
            <label className="inscriptionRecruter__form__champ--radio--item" htmlFor="exp3">
              <input type="radio" value="eurl" name="status" onChange={handleChangeForm} checked={register.status === 'eurl'} />
              EURL
            </label>
          </div>
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Prénom
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={register.firstname} name="firstname" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Nom
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={register.lastname} name="lastname" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Entreprise
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={register.firms} name="firms" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Ville
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={register.city} name="city" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Tél
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={register.phone} name="phone" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Site Internet
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={register.website} name="website" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Mail
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={register.email} name="email" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Mdp
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="password" value={register.password} name="password" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Vérif Mdp
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="password" value={register.verifypassword} name="verifypassword" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__buttons">
          <Link to="/profil">
            <button
              type="submit"
              className="inscriptionRecruter__form__buttons__button--valid"
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
              className="inscriptionRecruter__form__buttons__button--cancel"
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
