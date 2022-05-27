// == Import npm
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GrMail } from 'react-icons/gr';
// == Import component
import ModalSendMessage from '../ModalSendMessage';
// == Import action creator
import { setToggleModalSendMessage } from '../../actions/settings';
import { copyProfilDevToTemp } from '../../actions/profilDevModifyTemp';
import { addOneFavorite } from '../../actions/middleware';
// == Import styles
import './profilDev.scss';
// == Import img
import manAvatar1 from '../../assets/avatars/avatar_man1.png';
import manAvatar2 from '../../assets/avatars/avatar_man2.png';
import manAvatar3 from '../../assets/avatars/avatar_man3.png';
import manAvatar4 from '../../assets/avatars/avatar_man4.png';
import womanAvatar1 from '../../assets/avatars/avatar_woman1.png';
import womanAvatar2 from '../../assets/avatars/avatar_woman2.png';
import womanAvatar3 from '../../assets/avatars/avatar_woman3.png';
import womanAvatar4 from '../../assets/avatars/avatar_woman4.png';
import mapPointer from '../../assets/images/mapPointer.png';
// import mail from '../../assets/images/mail.png';
import addfavorites from '../../assets/images/addfavorites.png';
import disponible from '../../assets/images/Disponible.png';
import indisponible from '../../assets/images/indisponible.png';
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
// == Component
function ProfilDev() {
  // State to know if user is Dev or Recruiter and is logged or not
  const isDev = useSelector((state) => state.settings.log.isDev);
  const isRec = useSelector((state) => state.settings.log.isRecruiter);
  const logged = useSelector((state) => state.settings.log.logged);
  // state to open modal and send message to developer
  const sendMessage = useSelector((state) => state.settings.navigation.windowSendMessage);
  // state to know if user come to search route or favorites route
  const fromSearch = useSelector((state) => state.settings.navigation.fromSearchRoute);
  const fromFavorites = useSelector((state) => state.settings.navigation.fromFavoritesRoute);
  // state to have user picture
  const profilDev = useSelector((state) => state.profilDev);
  const modalProfilPicture = useSelector((state) => state.modalProfil.result.profilePicture);
  const profilDevPicture = profilDev.register.profilePicture;
  const isDark = useSelector((state) => state.settings.navigation.darkMode);

  // if user come search route or favorites route
  // we use modalProfilPicture or profilPicture
  let profilPicture;
  if (fromSearch || fromFavorites) {
    profilPicture = modalProfilPicture;
  }
  else {
    profilPicture = profilDevPicture;
  }
  // select how avatar to display
  let avatar;
  if (profilPicture === 'manAvatar1') {
    avatar = manAvatar1;
  }
  if (profilPicture === 'manAvatar2') {
    avatar = manAvatar2;
  }
  if (profilPicture === 'manAvatar3') {
    avatar = manAvatar3;
  }
  if (profilPicture === 'manAvatar4') {
    avatar = manAvatar4;
  }
  if (profilPicture === 'womanAvatar1') {
    avatar = womanAvatar1;
  }
  if (profilPicture === 'womanAvatar2') {
    avatar = womanAvatar2;
  }
  if (profilPicture === 'womanAvatar3') {
    avatar = womanAvatar3;
  }
  if (profilPicture === 'womanAvatar4') {
    avatar = womanAvatar4;
  }
  if (profilPicture === '') {
    avatar = '';
  }
  // if user come search route or favorites route
  // we use modalProfil or profilDev
  let data;
  if (fromSearch || fromFavorites) {
    data = useSelector((state) => state.modalProfil.result);
  }
  else {
    data = useSelector((state) => state.profilDev.register);
  }

  const dispatch = useDispatch();
  return (
    logged && (
    // open/close sendMessage Modal
    <div className={isDark ? 'profilDev dark' : 'profilDev'}>
      {sendMessage && (
        <ModalSendMessage />
      )}
      <h2 className={isDark ? 'profilDev__title dark' : 'profilDev__title'}>
        Fiche développeur
      </h2>

      <header className="profilDev__header">
        <div className={isDark ? 'profilDev__header__cadre dark' : 'profilDev__header__cadre'}>
          <img className={isDark ? 'profilDev__header__cadre--img dark' : 'profilDev__header__cadre--img'} src={avatar} alt="profil" />
        </div>
        <div className="profilDev__header__about">

          <h3 className={isDark ? 'profilDev__header__about--label dark' : 'profilDev__header__about--label'}>
            A Propos
          </h3>
          <span className="profilDev__header__about--city"><img src={mapPointer} alt="map pointer" className="profilDev__header__about--pointer" />{data.city}</span>

          <h4 className={isDark ? 'profilDev__header__about--name dark' : 'profilDev__header__about--name'}>
            {data.firstname} {data.lastname}
          </h4>
          <div className={isDark ? 'profilDev__header__about--profession dark' : 'profilDev__header__about--profession'}>
            {data.label}
          </div>
          <p className={isDark ? 'profilDev__header__about--presentation dark' : 'profilDev__header__about--presentation'}>
            {data.description}
          </p>
          {
            ((data.available_for_recruiters === '1') || (data.available_for_recruiters === 1)) && (
              <div className="profilDev__informations__disponibility">

                <div className={isDark ? 'profilDev__informations__disponibility--txt dark' : 'profilDev__informations__disponibility--txt'}>
                  Disponible

                </div>
                <img
                  className="profilDev__informations__disponibility--logo"
                  src={disponible}
                  alt="disponiblilité"
                />

              </div>

            )
          }
          {
            ((data.available_for_recruiters === '0') || (data.available_for_recruiters === 0)) && (
              <div className="profilDev__informations__disponibility">
                <div className={isDark ? 'profilDev__informations__disponibility--txt dark' : 'profilDev__informations__disponibility--txt'}>
                  Disponible dans 3 mois:
                </div>

                <img
                  className="profilDev__informations__disponibility--logo"
                  src={indisponible}
                  alt="disponiblilité"
                />
              </div>
            )
          }
        </div>

      </header>

      <div className="profilDev__container">
        <div className="profilDev__informations">
          <h3 className="profilDev__informations--label">
            Contact
          </h3>
          <div className="profilDev__informations__item">

            <div className={isDark ? 'profilDev__informations__item--label dark' : 'profilDev__informations__item--label'}> Tél

            </div>
            <div className={isDark ? 'profilDev__informations__item--color dark' : 'profilDev__informations__item--color'}>0{data.phone}
            </div>
          </div>

          {/*           <div className="profilDev__informations__item">
            <div className="profilDev__informations__item--label"> Adresse

          <div className="profilDev__informations__item">
            <div className={isDark ?
            'profilDev__informations__item--label dark' :
            'profilDev__informations__item--label'}> Adresse:
            </div>
            <div className={isDark ? 'profilDev__informations__item--black dark' :
            'profilDev__informations__item--black'}>{data.zipCode} {data.city}
            </div>
          </div> */}
          <div className="profilDev__informations__item">

            <div className={isDark ? 'profilDev__informations__item--label dark' : 'profilDev__informations__item--label'}> E-mail

            </div>
            <div className={isDark ? 'profilDev__informations__item--color dark' : 'profilDev__informations__item--color'}>{data.email}
            </div>
          </div>
          <div className="profilDev__informations__item">

            <div className={isDark ? 'profilDev__informations__item--label dark' : 'profilDev__informations__item--label'}> PortFolio

            </div>
            <div className={isDark ? 'profilDev__informations__item--color dark' : 'profilDev__informations__item--color'}>{data.portfolio}
            </div>
          </div>
          <div className="profilDev__informations__item">

            <div className={isDark ? 'profilDev__informations__item--label dark' : 'profilDev__informations__item--label'}> GitHub

            </div>
            <div className={isDark ? 'profilDev__informations__item--color dark' : 'profilDev__informations__item--color'}>{data.github}
            </div>
          </div>
        </div>

        <div className="profilDev__skills">
          <h3 className="profilDev__skills--label">
            Skills
          </h3>
          <div className="profilDev__skills__item">

            <div className={isDark ? 'profilDev__skills__item--label dark' : 'profilDev__skills__item--label'}> Experience

            </div>
            <div className={isDark ? 'profilDev__skills__item--color dark' : 'profilDev__skills__item--color'}>{data.experience} ans
            </div>
          </div>
          <div className="profilDev__skills__item">

            <div className={isDark ? 'profilDev__skills__item--label dark' : 'profilDev__skills__item--label'}>Anglais

            </div>
            <div className={isDark ? 'profilDev__skills__item--color dark' : 'profilDev__skills__item--color'}>{data.english}
            </div>
          </div>
          <div className="profilDev__skills__item">
            <div className="profilDev__skills__item--container">

              { // TODO GESTION STACK ICON FROM TENS CHOICE BACK/FRONT
              }

              <div className={isDark ? 'profilDev__skills__item--label dark' : 'profilDev__skills__item--label'}>Stack

              </div>
              <div className="profilDev__skills__item--color">
                {data.technology.map((item) => (
                  <div className={isDark ? 'profilDev__skills__item--color--stack dark' : 'profilDev__skills__item--color--stack'} key={item}> {item}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="profilDev__skills__item">
            <div className="profilDev__skills__item__logos">
              {data.technology.includes('React') ? <img src={react} className="profilDev__skills__item__logos--logo" alt="logo react" /> : '' }
              {data.technology.includes('JavaScript') ? <img src={javascript} className="profilDev__skills__item__logos--logo" alt="logo javascript" /> : '' }
              {data.technology.includes('HTML/CSS') ? <img src={html} className="profilDev__skills__item__logos--logo" alt="logo html" /> : '' }
              {data.technology.includes('HTML/CSS') ? <img src={css} className="profilDev__skills__item__logos--logo" alt="logo css" /> : '' }
              {data.technology.includes('Symfony') ? <img src={symfony} className="profilDev__skills__item__logos--logo" alt="logo symfony" /> : '' }
              {data.technology.includes('python') ? <img src={python} className="profilDev__skills__item__logos--logo" alt="logo python" /> : '' }
              {data.technology.includes('Java') ? <img src={java} className="profilDev__skills__item__logos--logo" alt="logo java" /> : '' }
              {data.technology.includes('TypeScript') ? <img src={typescript} className="profilDev__skills__item__logos--logo" alt="logo typescript" /> : '' }
              {data.technology.includes('C#') ? <img src={csharp} className="profilDev__skills__item__logos--logo" alt="logo C#" /> : '' }
              {data.technology.includes('C/C++') ? <img src={cplus} className="profilDev__skills__item__logos--logo" alt="logo C++" /> : '' }
              {data.technology.includes('PHP') ? <img src={php} className="profilDev__skills__item__logos--logo" alt="logo php" /> : '' }
              {data.technology.includes('Kotlin') ? <img src={kotlin} className="profilDev__skills__item__logos--logo" alt="logo kotlin" /> : '' }
              {data.technology.includes('Go') ? <img src={go} className="profilDev__skills__item__logos--logo" alt="logo go" /> : '' }
              {data.technology.includes('Rust') ? <img src={rust} className="profilDev__skills__item__logos--logo" alt="logo rust" /> : '' }
              {data.technology.includes('Ruby') ? <img src={ruby} className="profilDev__skills__item__logos--logo" alt="logo ruby" /> : '' }
              {data.technology.includes('Node.js') ? <img src={node} className="profilDev__skills__item__logos--logo" alt="logo node.js" /> : '' }
              {data.technology.includes('VueJs') ? <img src={vue} className="profilDev__skills__item__logos--logo" alt="logo vue.js" /> : '' }
              {data.technology.includes('jQuery') ? <img src={jquery} className="profilDev__skills__item__logos--logo" alt="logo jquery" /> : '' }
              {data.technology.includes('Express') ? <img src={express} className="profilDev__skills__item__logos--logo" alt="logo express" /> : '' }
              {data.technology.includes('Laravel') ? <img src={laravel} className="profilDev__skills__item__logos--logo" alt="logo laravel" /> : '' }
              {data.technology.includes('Angular') ? <img src={angular} className="profilDev__skills__item__logos--logo" alt="logo angular" /> : '' }
              {data.technology.includes('Django') ? <img src={django} className="profilDev__skills__item__logos--logo" alt="logo django" /> : '' }
              {data.technology.includes('WordPress') ? <img src={wordpress} className="profilDev__skills__item__logos--logo" alt="logo wordpress" /> : '' }
              {data.technology.includes('mysql') ? <img src={mysql} className="profilDev__skills__item__logos--logo" alt="logo mysql" /> : '' }
              {data.technology.includes('Swift') ? <img src={swift} className="profilDev__skills__item__logos--logo" alt="logo swift" /> : '' }
              {data.technology.includes('React_Native') ? <img src={reactnative} className="profilDev__skills__item__logos--logo" alt="logo react native" /> : '' }
              {data.technology.includes('MongoDb') ? <img src={mongo} className="profilDev__skills__item__logos--logo" alt="logo mongoDb" /> : '' }
              {data.technology.includes('Git') ? <img src={git} className="profilDev__skills__item__logos--logo" alt="logo git" /> : '' }
              {data.technology.includes('Docker') ? <img src={docker} className="profilDev__skills__item__logos--logo" alt="docker" /> : '' }
            </div>
            {/* <div className="profilDev__skills__item__logos">

                <img src={react} alt="logo react"

                className="profilDev__skills__item__logos--logo" />

                <img src={symfony} alt="logo symfony"

                className="profilDev__skills__item__logos--logo" />
                <img src={html} alt="logo html" className="profilDev__skills__item__logos--logo" />
                <img src={css} alt="logo css" className="profilDev__skills__item__logos--logo" />
              </div> */}
          </div>
        </div>
      </div>
      {
            // Display button 'send message' only if we come from search Route or Favorites Route
            (fromSearch || fromFavorites) && (
              <div className="profilDev__header__about__mail">
                <div className={isDark ? 'profilDev__header__about__mail--logo dark' : 'profilDev__header__about__mail--logo'}>
                  <GrMail />
                </div>
                <p
                  type="button"
                  className={isDark ? 'profilDev__header__about__mail--txt dark' : 'profilDev__header__about__mail--txt'}
                  onClick={() => {
                    dispatch(setToggleModalSendMessage());
                  }}
                >Envoyer un message
                </p>
              </div>
            )
          }
      {
            // Display 'add to favorites' only if we come from search Route or
            // Favorites Route and i'm recruiter
            ((fromSearch || fromFavorites) && isRec) && (
              <div
                // type="button"
                className="profilDev__header__about--favorite"
                onClick={() => {
                  dispatch(addOneFavorite());
                }}
              >
                <img
                  src={addfavorites}
                  alt="add favorites"
                  className="profilDev__header__about--favorite"
                  // onClick={() => {
                  //   dispatch(addOneFavorite());
                  // }}
                /> Ajouter aux favoris
              </div>
            )
          }

      {
        (fromSearch || fromFavorites) && (
          <div className="profilDev__buttons">

            {
              fromSearch && (
                <Link to="/recherche">
                  <button
                    className="profilDev__buttons--button"
                    type="button"
                    onClick={() => {
                    }}
                  >
                    Retour
                  </button>
                </Link>
              )
            }
            {
              fromFavorites && (
                <Link to="/favoris">
                  <button
                    className="profilDev__buttons--button"
                    type="button"
                    onClick={() => {
                    }}
                  >
                    Retour
                  </button>
                </Link>
              )
            }

          </div>

        )
      }
      { (isDev && !fromSearch) && (
      <div className="profilDev__buttons">
        <Link to="/modifier">
          {/* button to open window modify profile */}
          <button
            className="profilDev__buttons--button"
            type="button"
            onClick={() => {
              dispatch(copyProfilDevToTemp(profilDev));
            }}
          >
            Modifier
          </button>
        </Link>
      </div>
      )}

    </div>
    )

  );
}

export default ProfilDev;
