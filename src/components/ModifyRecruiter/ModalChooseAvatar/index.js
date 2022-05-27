// == Import npm
import { useDispatch } from 'react-redux';
// == Import action creator
import { chooseAvatarModal } from '../../../actions/settings';
import { selectAvatarTempRecruiter } from '../../../actions/profilRecModifyTemp';
// == Import avatars
import companyAvatar1 from '../../../assets/avatars/avatar_company1.png';
import companyAvatar2 from '../../../assets/avatars/avatar_company2.png';
import companyAvatar3 from '../../../assets/avatars/avatar_company3.png';
import companyAvatar4 from '../../../assets/avatars/avatar_company4.png';
import companyAvatar5 from '../../../assets/avatars/avatar_company5.png';
import companyAvatar6 from '../../../assets/avatars/avatar_company6.png';
// == Import styles
import './modalChooseAvatar.scss';
// == Component
function ModalChooseAvatar() {
  const dispatch = useDispatch();

  return (
    <div
      className="chooseAvatarBackground"
    >
      <div className="chooseAvatarContainer">
        <h2 className="chooseAvatarContainer--title">
          Choisissez votre avatar
        </h2>
        <div className="chooseAvatarContainer__imgs">
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar1}
            alt=""
            onClick={() => {
              dispatch(selectAvatarTempRecruiter('companyAvatar1'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar2}
            alt=""
            onClick={() => {
              dispatch(selectAvatarTempRecruiter('companyAvatar2'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar3}
            alt=""
            onClick={() => {
              dispatch(selectAvatarTempRecruiter('companyAvatar3'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar4}
            alt=""
            onClick={() => {
              dispatch(selectAvatarTempRecruiter('companyAvatar4'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar5}
            alt=""
            onClick={() => {
              dispatch(selectAvatarTempRecruiter('companyAvatar5'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar6}
            alt=""
            onClick={() => {
              dispatch(selectAvatarTempRecruiter('companyAvatar6'));
              dispatch(chooseAvatarModal());
            }}
          />
        </div>
        <div className="chooseAvatarContainer__cancel">
          {/* button to cancel avatar choice and close window */}
          <button className="chooseAvatarContainer__cancel--button" type="button" onClick={() => dispatch(chooseAvatarModal())}>
            Annuler
          </button>
        </div>

      </div>

    </div>
  );
}

export default ModalChooseAvatar;
