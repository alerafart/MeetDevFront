import './modalChooseAvatar.scss';
import { useDispatch } from 'react-redux';

// import all avatars

import menAvatar from '../../../assets/avatars/men.png';
import womanAvatar from '../../../assets/avatars/woman.png';
import { chooseAvatarModal } from '../../../actions/settings';
import { selectAvatar } from '../../../actions/formRegisterDev';

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
            src={menAvatar}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('menAvatar'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={womanAvatar}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('womanAvatar'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={menAvatar}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('menAvatar'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={womanAvatar}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('womanAvatar'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={menAvatar}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('menAvatar'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={womanAvatar}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('womanAvatar'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={menAvatar}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('menAvatar'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={womanAvatar}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('womanAvatar'));
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
