import './modalChooseAvatar.scss';
import { useDispatch } from 'react-redux';

// import all avatars
import companyAvatar1 from '../../../../assets/avatars/avatar_company1.png';
import companyAvatar2 from '../../../../assets/avatars/avatar_company2.png';
import companyAvatar3 from '../../../../assets/avatars/avatar_company3.png';
import companyAvatar4 from '../../../../assets/avatars/avatar_company4.png';
import companyAvatar5 from '../../../../assets/avatars/avatar_company5.png';
import companyAvatar6 from '../../../../assets/avatars/avatar_company6.png';
import { chooseAvatarModal } from '../../../../actions/settings';
import { selectAvatarRecruiter } from '../../../../actions/formRegisterRecruiter';

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
              dispatch(selectAvatarRecruiter('companyAvatar1'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar2}
            alt=""
            onClick={() => {
              dispatch(selectAvatarRecruiter('companyAvatar2'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar3}
            alt=""
            onClick={() => {
              dispatch(selectAvatarRecruiter('companyAvatar3'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar4}
            alt=""
            onClick={() => {
              dispatch(selectAvatarRecruiter('companyAvatar4'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar5}
            alt=""
            onClick={() => {
              dispatch(selectAvatarRecruiter('companyAvatar5'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={companyAvatar6}
            alt=""
            onClick={() => {
              dispatch(selectAvatarRecruiter('companyAvatar6'));
              dispatch(chooseAvatarModal());
            }}
          />
        </div>
        <div className="chooseAvatarContainer__cancel">
          <button className="chooseAvatarContainer__cancel--button" type="button" onClick={() => dispatch(chooseAvatarModal())}>
            Annuler
          </button>
        </div>

      </div>

    </div>
  );
}

export default ModalChooseAvatar;
