import './modalprofil.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import mapPointer from '../../assets/images/mapPointer.png';
import { setToggleModalProfil } from '../../actions/settings';
import manAvatar1 from '../../assets/avatars/avatar_man1.png';
import manAvatar2 from '../../assets/avatars/avatar_man2.png';
import manAvatar3 from '../../assets/avatars/avatar_man3.png';
import manAvatar4 from '../../assets/avatars/avatar_man4.png';
import womanAvatar1 from '../../assets/avatars/avatar_woman1.png';
import womanAvatar2 from '../../assets/avatars/avatar_woman2.png';
import womanAvatar3 from '../../assets/avatars/avatar_woman3.png';
import womanAvatar4 from '../../assets/avatars/avatar_woman4.png';
import react from '../../assets/images/react.png';
import symfony from '../../assets/images/symfony.png';
import html from '../../assets/images/archive/html.png';
import javascript from '../../assets/images/archive/logo-javascript.png';
import css from '../../assets/images/archive/css.png';
import python from '../../assets/images/archive/logo-python.png';
import java from '../../assets/images/archive/logo-java.png';
import typescript from '../../assets/images/archive/logo-typescript.png';
import csharp from '../../assets/images/archive/logo-csharp.png';
import cplus from '../../assets/images/archive/logo-c++.png';
import php from '../../assets/images/archive/logo-php.png';
import kotlin from '../../assets/images/archive/logo-kotlin.png';
import go from '../../assets/images/archive/logo-go.png';
import rust from '../../assets/images/archive/logo-rust.png';
import ruby from '../../assets/images/archive/logo-ruby.png';
import node from '../../assets/images/archive/logo-node.png';
import vue from '../../assets/images/archive/logo-vue.png';
import jquery from '../../assets/images/archive/logo-jquery.png';
import express from '../../assets/images/archive/logo-express.png';
import laravel from '../../assets/images/archive/logo-laravel.png';
import angular from '../../assets/images/archive/logo-angular.png';
import django from '../../assets/images/archive/logo-django.png';
import wordpress from '../../assets/images/archive/logo-wordpress.png';
import mysql from '../../assets/images/archive/logo-mysql.png';
import swift from '../../assets/images/archive/logo-swift.png';
import reactnative from '../../assets/images/archive/logo-reactnative.png';
import mongo from '../../assets/images/archive/logo-mongo.png';
import git from '../../assets/images/archive/logo-git.png';
import docker from '../../assets/images/archive/logo-docker.png';

function ModalProfil() {
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.modalProfil.result.firstname);
  const lastname = useSelector((state) => state.modalProfil.result.lastname);
  const city = useSelector((state) => state.modalProfil.result.city);
  const experience = useSelector((state) => state.modalProfil.result.experience);
  const languages = useSelector((state) => state.modalProfil.result.technology);
  const modalProfile = useSelector((state) => state.modalProfil.result.profilePicture);
  const isDark = useSelector((state) => state.settings.navigation.darkMode);

  let avatar;
  if (modalProfile === 'manAvatar1') {
    avatar = manAvatar1;
  }
  if (modalProfile === 'manAvatar2') {
    avatar = manAvatar2;
  }
  if (modalProfile === 'manAvatar3') {
    avatar = manAvatar3;
  }
  if (modalProfile === 'manAvatar4') {
    avatar = manAvatar4;
  }
  if (modalProfile === 'womanAvatar1') {
    avatar = womanAvatar1;
  }
  if (modalProfile === 'womanAvatar2') {
    avatar = womanAvatar2;
  }
  if (modalProfile === 'womanAvatar3') {
    avatar = womanAvatar3;
  }
  if (modalProfile === 'womanAvatar4') {
    avatar = womanAvatar4;
  }
  return (
    <div
      className={isDark ? 'modalBackground dark' : 'modalBackground'}
    >
      <div className={isDark ? 'modalContainer dark' : 'modalContainer'}>
        <div className={isDark ? 'modalContainer__exit dark' : 'modalContainer__exit'}>
          <button
            className={isDark ? 'modalContainer__exit--button dark' : 'modalContainer__exit--button'}
            type="button"
            onClick={() => {
              dispatch(setToggleModalProfil());
            }}
          >
            X
          </button>
        </div>
        <header className="modalContainer__header">
          <img
            className="modalContainer__header--avatar"
            src={avatar}
            alt="avatar"
          />
        </header>
        <main className="modalContainer__main">
          <div className={isDark ? 'modalContainer__main--left dark' : 'modalContainer__main--left'}>&#x3C;</div>
          <div className="modalContainer__main__profil">
            <div className="modalContainer__main__profil--item--name">
              {firstname} {lastname}
            </div>
            <div className="modalContainer__main__profil--item">
              <div className="modalContainer__main__profil--item--adress">
                <img
                  className="modalContainer__main__profil--item--adress--icon"
                  src={mapPointer}
                  alt="avatar"
                />
                <div className="modalContainer__main__profil--item--adress--ville">
                  {city}
                </div>
              </div>
            </div>
            <div className={isDark ? 'modalContainer__main__profil--item dark' : 'modalContainer__main__profil--item'}>
              Expérience
            </div>
            <div className="modalContainer__main__profil--item--experience">
              {experience === 1 ? '- de 1 an' : ''}
              {experience === 2 ? '1 à 3 ans' : ''}
              {experience === 3 ? '+ de 3 ans' : ''}
            </div>
            <div className={isDark ? 'modalContainer__main__profil--item dark' : 'modalContainer__main__profil--item'}>
              Langages
            </div>
            <div className="modalContainer__main__profil--logos">
              {languages.includes('React') ? <img src={react} className="profilDev__skills__item__logos--logo" alt="logo react" /> : '' }
              {languages.includes('JavaScript') ? <img src={javascript} className="profilDev__skills__item__logos--logo" alt="logo javascript" /> : '' }
              {languages.includes('HTML/CSS') ? <img src={html} className="profilDev__skills__item__logos--logo" alt="logo html" /> : '' }
              {languages.includes('HTML/CSS') ? <img src={css} className="profilDev__skills__item__logos--logo" alt="logo css" /> : '' }
              {languages.includes('Symfony') ? <img src={symfony} className="profilDev__skills__item__logos--logo" alt="logo symfony" /> : '' }
              {languages.includes('python') ? <img src={python} className="profilDev__skills__item__logos--logo" alt="logo python" /> : '' }
              {languages.includes('Java') ? <img src={java} className="profilDev__skills__item__logos--logo" alt="logo java" /> : '' }
              {languages.includes('TypeScript') ? <img src={typescript} className="profilDev__skills__item__logos--logo" alt="logo typescript" /> : '' }
              {languages.includes('C#') ? <img src={csharp} className="profilDev__skills__item__logos--logo" alt="logo C#" /> : '' }
              {languages.includes('C/C++') ? <img src={cplus} className="profilDev__skills__item__logos--logo" alt="logo C++" /> : '' }
              {languages.includes('PHP') ? <img src={php} className="profilDev__skills__item__logos--logo" alt="logo php" /> : '' }
              {languages.includes('Kotlin') ? <img src={kotlin} className="profilDev__skills__item__logos--logo" alt="logo kotlin" /> : '' }
              {languages.includes('Go') ? <img src={go} className="profilDev__skills__item__logos--logo" alt="logo go" /> : '' }
              {languages.includes('Rust') ? <img src={rust} className="profilDev__skills__item__logos--logo" alt="logo rust" /> : '' }
              {languages.includes('Ruby') ? <img src={ruby} className="profilDev__skills__item__logos--logo" alt="logo ruby" /> : '' }
              {languages.includes('Node.js') ? <img src={node} className="profilDev__skills__item__logos--logo" alt="logo node.js" /> : '' }
              {languages.includes('VueJs') ? <img src={vue} className="profilDev__skills__item__logos--logo" alt="logo vue.js" /> : '' }
              {languages.includes('jQuery') ? <img src={jquery} className="profilDev__skills__item__logos--logo" alt="logo jquery" /> : '' }
              {languages.includes('Express') ? <img src={express} className="profilDev__skills__item__logos--logo" alt="logo express" /> : '' }
              {languages.includes('Laravel') ? <img src={laravel} className="profilDev__skills__item__logos--logo" alt="logo laravel" /> : '' }
              {languages.includes('Angular') ? <img src={angular} className="profilDev__skills__item__logos--logo" alt="logo angular" /> : '' }
              {languages.includes('Django') ? <img src={django} className="profilDev__skills__item__logos--logo" alt="logo django" /> : '' }
              {languages.includes('WordPress') ? <img src={wordpress} className="profilDev__skills__item__logos--logo" alt="logo wordpress" /> : '' }
              {languages.includes('mysql') ? <img src={mysql} className="profilDev__skills__item__logos--logo" alt="logo mysql" /> : '' }
              {languages.includes('Swift') ? <img src={swift} className="profilDev__skills__item__logos--logo" alt="logo swift" /> : '' }
              {languages.includes('React_Native') ? <img src={reactnative} className="profilDev__skills__item__logos--logo" alt="logo react native" /> : '' }
              {languages.includes('MongoDb') ? <img src={mongo} className="profilDev__skills__item__logos--logo" alt="logo MongoDb" /> : '' }
              {languages.includes('Git') ? <img src={git} className="profilDev__skills__item__logos--logo" alt="logo git" /> : '' }
              {languages.includes('Docker') ? <img src={docker} className="profilDev__skills__item__logos--logo" alt="logo docker" /> : '' }
            </div>
          </div>
          <div className={isDark ? 'modalContainer__main--right dark' : 'modalContainer__main--right'}>&gt;</div>
          <div className="modalContainer__footer">
            {/* <button
              className="modalContainer__footer--button"
              type="button"
              onClick={() => {
                setCloseDevModal(true);
              }}
            >
              Contacter
            </button> */}
            <Link to="/profil">
              <button
                className="modalContainer__footer--button"
                type="button"
                onClick={() => {
                  dispatch(setToggleModalProfil());
                }}
              >
                Voir Profil
              </button>
            </Link>
            {/* <button
              className="modalContainer__footer--button"
              type="button"
            >
              Ajouter aux Favoris
            </button> */}
            {/* <button
              className="modalContainer__footer--exit"
              onClick={() => {
                setOpenModal(false);
              }}
              type="button"
            >
              Fermer
            </button> */}
          </div>
        </main>

      </div>
    </div>
  );
}

export default ModalProfil;
