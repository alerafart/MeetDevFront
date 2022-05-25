/* eslint-disable max-len */
// == Import : npm
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import all avatars and logos
import mapPointer from '../../../assets/images/mapPointer.png';
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
import html from '../../../assets/images/archive/html.png';
import javascript from '../../../assets/images/archive/logo-javascript.png';
import css from '../../../assets/images/archive/css.png';
import python from '../../../assets/images/archive/logo-python.png';
import java from '../../../assets/images/archive/logo-java.png';
import typescript from '../../../assets/images/archive/logo-typescript.png';
import csharp from '../../../assets/images/archive/logo-csharp.png';
import cplus from '../../../assets/images/archive/logo-c++.png';
import php from '../../../assets/images/archive/logo-php.png';
import kotlin from '../../../assets/images/archive/logo-kotlin.png';
import go from '../../../assets/images/archive/logo-go.png';
import rust from '../../../assets/images/archive/logo-rust.png';
import ruby from '../../../assets/images/archive/logo-ruby.png';
import node from '../../../assets/images/archive/logo-node.png';
import vue from '../../../assets/images/archive/logo-vue.png';
import jquery from '../../../assets/images/archive/logo-jquery.png';
import express from '../../../assets/images/archive/logo-express.png';
import laravel from '../../../assets/images/archive/logo-laravel.png';
import angular from '../../../assets/images/archive/logo-angular.png';
import django from '../../../assets/images/archive/logo-django.png';
import wordpress from '../../../assets/images/archive/logo-wordpress.png';
import mysql from '../../../assets/images/archive/logo-mysql.png';
import swift from '../../../assets/images/archive/logo-swift.png';
import reactnative from '../../../assets/images/archive/logo-reactnative.png';

// import action-creator
import { setToggleModalProfil } from '../../../actions/settings';
import { getOneFavorite } from '../../../actions/favoritesaction';
import { deleteOneFavorite, recruiterFavorites } from '../../../actions/middleware';

// style
import './card.scss';

// == Component
function Card({ favorite }) {
  const dispatch = useDispatch();
  // to display profil Picture on card
  const profilePicture = favorite.data.UserData.profile_picture;
  // technologies(langages) format string
  const technology = favorite.data.UserData.languages;

  // select what avatar to display
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

        {/* display avatar from dev */}
        <img src={avatar} alt="Avatar" className="card__avatar--img" />
      </div>
      {/* Display, fistname, lastname and city from dev on card. */}
      <div className="card__container">
        <h4 className="card__container--name">{favorite.data.UserData.firstname} {favorite.data.UserData.lastname}</h4>
        <p className="card__container--localisation"><img className="card__container--localisation--icon" src={mapPointer} alt="map pointer" />{favorite.data.UserData.city}</p>
        <div
          className="card__container--experience"
        >
          <h4 className="card__container--experience--title">
            Experience
          </h4>
          <div className="card__container--experience--year">
            {/* ďisplay '- 1 an' '1 à 3 ans' or '+ 3 ans' according to experience 1/2/3  */}
            {
              favorite.data.UserData.years_of_experience === 1 && (
                '- 1 an'
              )
            }
            {
              favorite.data.UserData.years_of_experience === 2 && (
                '1 à 3 ans'
              )
            }
            {
              favorite.data.UserData.years_of_experience === 3 && (
                '+ 3 ans'
              )
            }
          </div>
        </div>
      </div>
      {/* Button display profil: On click open modal profil dev + store informations developper with getOneFavorites on state modalProfil */}

      <div className="card__logos">
        {
          //* DISPLAY TECHNOLOGIE FROM PROFIL.
          //* TODO FOR THE MOMENT ALL LOGO ARE NOT VISIBLE  */
        }
        {technology.includes('React') ? <img src={react} className="card__avatar--logo" alt="logo react" /> : '' }
        {technology.includes('JavaScript') ? <img src={javascript} className="card__avatar--logo" alt="logo javascript" /> : '' }
        {technology.includes('HTML/CSS') ? <img src={html} className="card__avatar--logo" alt="logo html" /> : '' }
        {technology.includes('HTML/CSS') ? <img src={css} className="card__avatar--logo" alt="logo css" /> : '' }
        {technology.includes('Symfony') ? <img src={symfony} className="card__avatar--logo" alt="logo symfony" /> : '' }
        {technology.includes('python') ? <img src={python} className="card__avatar--logo" alt="logo python" /> : '' }
        {technology.includes('Java') ? <img src={java} className="card__avatar--logo" alt="logo java" /> : '' }
        {technology.includes('TypeScript') ? <img src={typescript} className="card__avatar--logo" alt="logo typescript" /> : '' }
        {technology.includes('C#') ? <img src={csharp} className="card__avatar--logo" alt="logo C#" /> : '' }
        {technology.includes('C/C++') ? <img src={cplus} className="card__avatar--logo" alt="logo C++" /> : '' }
        {technology.includes('PHP') ? <img src={php} className="card__avatar--logo" alt="logo php" /> : '' }
        {technology.includes('Kotlin') ? <img src={kotlin} className="card__avatar--logo" alt="logo kotlin" /> : '' }
        {technology.includes('Go') ? <img src={go} className="card__avatar--logo" alt="logo go" /> : '' }
        {technology.includes('Rust') ? <img src={rust} className="card__avatar--logo" alt="logo rust" /> : '' }
        {technology.includes('Ruby') ? <img src={ruby} className="card__avatar--logo" alt="logo ruby" /> : '' }
        {technology.includes('Node.js') ? <img src={node} className="card__avatar--logo" alt="logo node.js" /> : '' }
        {technology.includes('Vue.js') ? <img src={vue} className="card__avatar--logo" alt="logo vue.js" /> : '' }
        {technology.includes('jQuery') ? <img src={jquery} className="card__avatar--logo" alt="logo jquery" /> : '' }
        {technology.includes('Express') ? <img src={express} className="card__avatar--logo" alt="logo express" /> : '' }
        {technology.includes('Laravel') ? <img src={laravel} className="card__avatar--logo" alt="logo laravel" /> : '' }
        {technology.includes('Angular') ? <img src={angular} className="card__avatar--logo" alt="logo angular" /> : '' }
        {technology.includes('Django') ? <img src={django} className="card__avatar--logo" alt="logo django" /> : '' }
        {technology.includes('Wordpress') ? <img src={wordpress} className="card__avatar--logo" alt="logo wordpress" /> : '' }
        {technology.includes('mysql') ? <img src={mysql} className="card__avatar--logo" alt="logo mysql" /> : '' }
        {technology.includes('Swift') ? <img src={swift} className="card__avatar--logo" alt="logo swift" /> : '' }
        {technology.includes('React_Native') ? <img src={reactnative} className="card__avatar--logo" alt="logo react native" /> : '' }

      </div>

      <div className="card__button">
        <button
          type="button"
          // Button to open a modal profile
          onClick={() => {
            dispatch(getOneFavorite(favorite));
            dispatch(setToggleModalProfil());
          }}
          className="card__button--profileview"
        >Voir le profil
        </button>
        {/* Button delete profil: On click store informations developper with getOneFavorites on state modalProfil
          // deleted profildev selected with action deleted from middleware favorites
        */}
        <button
          type="button"
          onClick={() => {
            dispatch(getOneFavorite(favorite));
            dispatch(deleteOneFavorite());
            dispatch(recruiterFavorites());
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
