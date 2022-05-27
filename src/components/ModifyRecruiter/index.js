// == Import npm
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// == Import component
import ModalChooseAvatar from './ModalChooseAvatar';
// == Import action creator
import { validateModifyRecruiter } from '../../actions/middleware';
import { tempModifRecProfil } from '../../actions/profilRecModifyTemp';
import { chooseAvatarModal } from '../../actions/settings';
// == Import avatar
import companyAvatar1 from '../../assets/avatars/avatar_company1.png';
import companyAvatar2 from '../../assets/avatars/avatar_company2.png';
import companyAvatar3 from '../../assets/avatars/avatar_company3.png';
import companyAvatar4 from '../../assets/avatars/avatar_company4.png';
import companyAvatar5 from '../../assets/avatars/avatar_company5.png';
import companyAvatar6 from '../../assets/avatars/avatar_company6.png';
// == Import style
import './modifyRecruiter.scss';

// == Component
function ModifyRecruiter() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  // state to have user data from profilRecruiterModifyTemp state
  const data = useSelector((state) => state.profilRecruiterModifyTemp.register);
  // state to show avatar modal or not
  const displayChooseAvatarModal = useSelector(
    (state) => state.settings.navigation.chooseAvatarModal,
  );
    // function to change profilRecruiterModifyTemp data
  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(tempModifRecProfil(value, name));
  }

  // select how avatar to display
  let avatar;
  if (data.profilePicture === 'companyAvatar1') {
    avatar = companyAvatar1;
  }
  if (data.profilePicture === 'companyAvatar2') {
    avatar = companyAvatar2;
  }
  if (data.profilePicture === 'companyAvatar3') {
    avatar = companyAvatar3;
  }
  if (data.profilePicture === 'companyAvatar4') {
    avatar = companyAvatar4;
  }
  if (data.profilePicture === 'companyAvatar5') {
    avatar = companyAvatar5;
  }
  if (data.profilePicture === 'companyAvatar6') {
    avatar = companyAvatar6;
  }
  if (data.profilePicture === '') {
    avatar = '';
  }

  return (
    <div className={isDark ? 'inscriptionRecruiter dark' : 'inscriptionRecruiter'}>
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
          { /* button to open avatar modal */}
          <button type="button" onClick={() => dispatch(chooseAvatarModal())}>Ajouter un logo</button>
          {
                  displayChooseAvatarModal && <ModalChooseAvatar />
                }
        </div>
      </form>
      <form className="inscriptionRecruiter__form">
        {/* <div className="inscriptionRecruiter__form__champ">
          <div className="inscriptionRecruiter__form__champ--radio">
            <label className="inscriptionRecruiter__form__champ--radio--item" htmlFor="exp1">
              <input type="radio" value="sarl" name="status"
              onChange={handleChangeForm} checked={register.status === 'sarl'} />
              SARL
            </label>
            <label className="inscriptionRecruiter__form__champ--radio--item" htmlFor="exp2">
              <input type="radio" value="sas" name="status"
              onChange={handleChangeForm} checked={register.status === 'sas'} />
              SAS
            </label>
            <label className="inscriptionRecruiter__form__champ--radio--item" htmlFor="exp3">
              <input type="radio" value="eurl" name="status"
              onChange={handleChangeForm} checked={register.status === 'eurl'} />
              EURL
            </label>
          </div>
        </div> */}
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Prénom
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={data.firstname} name="firstname" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Nom
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={data.lastname} name="lastname" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Entreprise
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={data.firms} name="firms" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Ville
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={data.city} name="city" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Tél
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={data.phone} name="phone" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Site Internet
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={data.website} name="website" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Mail
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="email" value={data.email} name="email" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__champ">
          <div className={isDark ? 'inscriptionRecruiter__form__champ--label dark' : 'inscriptionRecruiter__form__champ--label'}>
            Description
          </div>
          <input className={isDark ? 'inscriptionRecruiter__form__champ--input dark' : 'inscriptionRecruiter__form__champ--input'} type="text" value={data.description} name="description" onChange={handleChangeForm} />
        </div>
        <div className="inscriptionRecruiter__form__buttons">
          <Link to="/profil">
            {/* button to save data, close window and go back on profile */}
            <button
              type="submit"
              className="inscriptionRecruiter__form__buttons__button--valid"
              onClick={() => {
                // dispatch(inscriptionDev());
                // dispatch(toggleWindowLog());
                dispatch(validateModifyRecruiter());
              }}
            >
              Valider
            </button>
          </Link>
          <Link to="/profil">
            {/* button to cancel data, close window and go back on profile */}
            <button
              type="submit"
              className={isDark ? 'inscriptionRecruiter__form__buttons__button--cancel dark' : 'inscriptionRecruiter__form__buttons__button--cancel'}
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
