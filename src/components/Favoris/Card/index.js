/* eslint-disable max-len */

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import all avatars
import manAvatar1 from '../../../assets/avatars/avatar_man1.png';
import manAvatar2 from '../../../assets/avatars/avatar_man2.png';
import manAvatar3 from '../../../assets/avatars/avatar_man3.png';
import manAvatar4 from '../../../assets/avatars/avatar_man4.png';
import womanAvatar1 from '../../../assets/avatars/avatar_woman1.png';
import womanAvatar2 from '../../../assets/avatars/avatar_woman2.png';
import womanAvatar3 from '../../../assets/avatars/avatar_woman3.png';
import womanAvatar4 from '../../../assets/avatars/avatar_woman4.png';
import react from '../../../assets/images/react.png';
import symfony from '../../../assets/images/symfony.png';
import python from '../../../assets/images/archive/logo-python.png';
import wordpress from '../../../assets/images/archive/logo-wordpress.png';

// import action-creator
import { setToggleModalProfil } from '../../../actions/settings';
import { getOneFavorite } from '../../../actions/favorites';
import { deleteOneFavorite } from '../../../actions/middleware';

// style
import './card.scss';

function Card({ favorite }) {
  const dispatch = useDispatch();
  const profilePicture = favorite.data.UserData.profile_picture;
  const technology = favorite.data.UserData.languages;

  // select how avatar to display
  let avatar;
  if (profilePicture === 'manAvatar1') {
    avatar = manAvatar1;
  }
  if (profilePicture === 'manAvatar2') {
    avatar = manAvatar2;
  }
  if (profilePicture === 'manAvatar3') {
    avatar = manAvatar3;
  }
  if (profilePicture === 'manAvatar4') {
    avatar = manAvatar4;
  }
  if (profilePicture === 'womanAvatar1') {
    avatar = womanAvatar1;
  }
  if (profilePicture === 'womanAvatar2') {
    avatar = womanAvatar2;
  }
  if (profilePicture === 'womanAvatar3') {
    avatar = womanAvatar3;
  }
  if (profilePicture === 'womanAvatar4') {
    avatar = womanAvatar4;
  }
  if (profilePicture === '') {
    avatar = '';
  }

  return (
    <div className="card">
      <div className="card__avatar">
        {technology.includes('React') ? <img src={react} className="card__avatar--logo" alt="logo react" /> : '' }
        {technology.includes('Symfony') ? <img src={symfony} className="card__avatar--logo" alt="logo symfony" /> : '' }
        {technology.includes('python') ? <img src={python} className="card__avatar--logo" alt="logo python" /> : '' }
        {technology.includes('Wordpress') ? <img src={wordpress} className="card__avatar--logo" alt="logo wordpress" /> : '' }
        <img src={avatar} alt="Avatar" className="card__avatar--img" />
      </div>
      <div className="card__container">
        <h4 className="card__container--name">{favorite.data.UserData.firstname} {favorite.data.UserData.lastname}</h4>
        <p className="card__container--localisation">{favorite.data.UserData.city}</p>
        <p className="card__container--experience">Experience <span className="card__container--experience--year"> -{favorite.data.UserData.years_of_experience} an</span></p>
      </div>
      <div className="card__button">
        <button
          type="button"
          onClick={() => {
            dispatch(getOneFavorite(favorite));
            dispatch(setToggleModalProfil());
          }}
          className="card__button--profileview"
        >Voir le profil
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(getOneFavorite(favorite));
            dispatch(deleteOneFavorite());
          }}
          className="card__button--delete"
        >Supprimer
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  favorite: PropTypes.arrayOf(
    PropTypes.shape({
      UserData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        years_of_experience: PropTypes.number.isRequired,
        profile_picture: PropTypes.string.isRequired,
        languages: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Card;
