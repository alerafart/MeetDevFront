import './modifyRecruiter.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tempModifRecProfil } from '../../actions/profilRecModifyTemp';
import { validateModifyRecruiter } from '../../actions/middleware';

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
    <div className="inscriptionRecruiter">
      <h2 className="inscriptionRecruiter__title">
        Mes informations
      </h2>

      <form className="inscriptionRecruiter__header">
        <div className="inscription__form__avatarContainer">
          {
                  avatar && (
                    <img src={avatar} alt="" />
                  )
                }
          <button type="button" onClick={() => dispatch(chooseAvatarModal())}>Modifier le logo</button>
          {
                  displayChooseAvatarModal && <ModalChooseAvatar />
                }
        </div>
      </form>
      <form className="inscriptionRecruiter__form">
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
          <div className="inscriptionRecruiter__form__champ--label">
            Prénom
          </div>
          <input className="inscriptionRecruiter__form__champ--input" type="text" value={data.firstname} name="firstname" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className="inscriptionRecruiter__form__champ--label">
            Nom
          </div>
          <input className="inscriptionRecruiter__form__champ--input" type="text" value={data.lastname} name="lastname" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className="inscriptionRecruiter__form__champ--label">
            Entreprise
          </div>
          <input className="inscriptionRecruiter__form__champ--input" type="text" value={data.firms} name="firms" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className="inscriptionRecruiter__form__champ--label">
            Ville
          </div>
          <input className="inscriptionRecruiter__form__champ--input" type="text" value={data.city} name="city" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className="inscriptionRecruiter__form__champ--label">
            Tél
          </div>
          <input className="inscriptionRecruiter__form__champ--input" type="text" value={data.phone} name="phone" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className="inscriptionRecruiter__form__champ--label">
            Site Internet
          </div>
          <input className="inscriptionRecruiter__form__champ--input" type="text" value={data.website} name="website" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className="inscriptionRecruiter__form__champ--label">
            Mail
          </div>
          <input className="inscriptionRecruiter__form__champ--input" type="email" value={data.email} name="email" onChange={handleChangeForm} />
        <div className="inscriptionRecruiter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Description
          </div>
          <input className="inscriptionRecruiter__form__champ--input" type="text" value={data.description} name="description" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__buttons">
          <Link to="/profil">
            <button
              type="submit"
              className="inscriptionRecruiter__form__buttons__button--valid"
              onClick={() => {
                dispatch(validateModifyRecruiter());
              }}
            >
              valider
            </button>
          </Link>
          <Link to="/profil">
            <button
              type="submit"
              className="inscriptionRecruiter__form__buttons__button--cancel"
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
