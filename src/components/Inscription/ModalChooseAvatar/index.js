import { useDispatch, useSelector } from 'react-redux';

// == Import action creator
import { chooseAvatarModal } from '../../../actions/settings';
import { selectAvatar } from '../../../actions/formRegisterDev';
// == Import avatars

import manAvatar1 from '../../../assets/avatars/avatar_man1.png';
import manAvatar2 from '../../../assets/avatars/avatar_man2.png';
import manAvatar3 from '../../../assets/avatars/avatar_man3.png';
import manAvatar4 from '../../../assets/avatars/avatar_man4.png';
import womanAvatar1 from '../../../assets/avatars/avatar_woman1.png';
import womanAvatar2 from '../../../assets/avatars/avatar_woman2.png';
import womanAvatar3 from '../../../assets/avatars/avatar_woman3.png';
import womanAvatar4 from '../../../assets/avatars/avatar_woman4.png';
// == Import styles
import './modalChooseAvatar.scss';
// == Component
function ModalChooseAvatar() {
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      className={isDark ? 'chooseAvatarBackground dark' : 'chooseAvatarBackground'}
    >
      <div className={isDark ? 'chooseAvatarContainer dark' : 'chooseAvatarContainer'}>
        <h2 className="chooseAvatarContainer--title">
          Choisissez votre avatar
        </h2>
        <div className="chooseAvatarContainer__imgs">
          <img
            className="chooseAvatarContainer__imgs--img"
            src={womanAvatar1}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('womanAvatar1'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={womanAvatar2}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('womanAvatar2'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={womanAvatar3}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('womanAvatar3'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={womanAvatar4}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('womanAvatar4'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={manAvatar1}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('manAvatar1'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={manAvatar2}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('manAvatar2'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={manAvatar3}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('manAvatar3'));
              dispatch(chooseAvatarModal());
            }}
          />
          <img
            className="chooseAvatarContainer__imgs--img"
            src={manAvatar4}
            alt=""
            onClick={() => {
              dispatch(selectAvatar('manAvatar4'));
              dispatch(chooseAvatarModal());
            }}
          />
        </div>
        <div className="chooseAvatarContainer__cancel">
          <button className={isDark ? 'chooseAvatarContainer__cancel--button dark' : 'chooseAvatarContainer__cancel--button'} type="button" onClick={() => dispatch(chooseAvatarModal())}>
            Annuler
          </button>
        </div>

      </div>

    </div>
  );
}

export default ModalChooseAvatar;
