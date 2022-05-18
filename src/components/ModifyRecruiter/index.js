import './modifyRecruiter.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tempModifRecProfil } from '../../actions/profilRecModifyTemp';

function ModifyRecruiter() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profilRecruiterModifyTemp.register);
  console.log(data);

  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(tempModifRecProfil(value, name));
  }
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
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Prénom
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={data.firstname} name="firstname" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Nom
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={data.lastname} name="lastname" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Entreprise
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={data.firms} name="firms" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Ville
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={data.city} name="city" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Tél
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={data.phone} name="phone" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Site Internet
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={data.website} name="website" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Mail
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value={data.email} name="email" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruter__form__buttons">
          <Link to="/profil">
            <button
              type="submit"
              className="inscriptionRecruter__form__buttons__button--valid"
            >
              valider
            </button>
          </Link>
          <Link to="/profil">
            <button
              type="submit"
              className="inscriptionRecruter__form__buttons__button--cancel"
            >
              Annuler
            </button>
          </Link>

        </div>
      </form>
    </div>
  );
}

export default ModifyRecruiter;
