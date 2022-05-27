import './title.scss';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
// == Import action creator
import { setToggleModalProfil } from '../../../actions/settings';
import { fetchProfileModale } from '../../../actions/formSearchDev';
// == Import styles

// == Import img
import manAvatar1 from '../../../assets/avatars/avatar_man1.png';
import manAvatar2 from '../../../assets/avatars/avatar_man2.png';
import manAvatar3 from '../../../assets/avatars/avatar_man3.png';
import manAvatar4 from '../../../assets/avatars/avatar_man4.png';
import womanAvatar1 from '../../../assets/avatars/avatar_woman1.png';
import womanAvatar2 from '../../../assets/avatars/avatar_woman2.png';
import womanAvatar3 from '../../../assets/avatars/avatar_woman3.png';
import womanAvatar4 from '../../../assets/avatars/avatar_woman4.png';
// == Component
function Title({
  user,
}) {
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch();

  // select how avatar to display
  let avatar;
  if (user.data.profile_picture === 'manAvatar1') {
    avatar = manAvatar1;
  }
  if (user.data.profile_picture === 'manAvatar2') {
    avatar = manAvatar2;
  }
  if (user.data.profile_picture === 'manAvatar3') {
    avatar = manAvatar3;
  }
  if (user.data.profile_picture === 'manAvatar4') {
    avatar = manAvatar4;
  }
  if (user.data.profile_picture === 'womanAvatar1') {
    avatar = womanAvatar1;
  }
  if (user.data.profile_picture === 'womanAvatar2') {
    avatar = womanAvatar2;
  }
  if (user.data.profile_picture === 'womanAvatar3') {
    avatar = womanAvatar3;
  }
  if (user.data.profile_picture === 'womanAvatar4') {
    avatar = womanAvatar4;
  }
  return (
    <div
      className={isDark ? 'result__champ dark' : 'result__champ'}
      onClick={() => {
        dispatch(fetchProfileModale(user));
        dispatch(setToggleModalProfil());
      }}
    >
      <img
        className="result__champ--img"
        src={avatar}
        alt="avatar"
      />
      <div className={isDark ? 'result__champ--item dark' : 'result__champ--item'}>
        {user.data.firstname} {user.data.lastname}
      </div>
    </div>
  );
}

Title.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      profile_picture: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Title;
