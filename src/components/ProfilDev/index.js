import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './profilDev.scss';
import manAvatar1 from '../../assets/avatars/avatar_man1.png';
import manAvatar2 from '../../assets/avatars/avatar_man2.png';
import manAvatar3 from '../../assets/avatars/avatar_man3.png';
import manAvatar4 from '../../assets/avatars/avatar_man4.png';
import womanAvatar1 from '../../assets/avatars/avatar_woman1.png';
import womanAvatar2 from '../../assets/avatars/avatar_woman2.png';
import womanAvatar3 from '../../assets/avatars/avatar_woman3.png';
import womanAvatar4 from '../../assets/avatars/avatar_woman4.png';
import mapPointer from '../../assets/images/mapPointer.png';
import mail from '../../assets/images/mail.png';
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
import ModalSendMessage from '../ModalSendMessage';
import { setToggleModalSendMessage } from '../../actions/settings';
import { copyProfilDevToTemp } from '../../actions/profilDevModifyTemp';
import { addOneFavorite } from '../../actions/middleware';

function ProfilDev() {
  const isDev = useSelector((state) => state.settings.log.isDev);
  const logged = useSelector((state) => state.settings.log.logged);
  const sendMessage = useSelector((state) => state.settings.navigation.windowSendMessage);
  const fromSearch = useSelector((state) => state.settings.navigation.fromSearchRoute);
  const fromFavorites = useSelector((state) => state.settings.navigation.fromFavoritesRoute);
  const profilDev = useSelector((state) => state.profilDev);
  const profilDevPicture = profilDev.register.profilePicture;
  const modalProfilPicture = useSelector((state) => state.modalProfil.result.profilePicture);

  let avatar;
  if (modalProfilPicture === 'manAvatar1') {
    avatar = manAvatar1;
  }
  if (modalProfilPicture === 'manAvatar2') {
    avatar = manAvatar2;
  }
  if (modalProfilPicture === 'manAvatar3') {
    avatar = manAvatar3;
  }
  if (modalProfilPicture === 'manAvatar4') {
    avatar = manAvatar4;
  }
  if (modalProfilPicture === 'womanAvatar1') {
    avatar = womanAvatar1;
  }
  if (modalProfilPicture === 'womanAvatar2') {
    avatar = womanAvatar2;
  }
  if (modalProfilPicture === 'womanAvatar3') {
    avatar = womanAvatar3;
  }
  if (modalProfilPicture === 'womanAvatar4') {
    avatar = womanAvatar4;
  }
  if (profilDevPicture === 'manAvatar1') {
    avatar = manAvatar1;
  }
  if (profilDevPicture === 'manAvatar2') {
    avatar = manAvatar2;
  }
  if (profilDevPicture === 'manAvatar3') {
    avatar = manAvatar3;
  }
  if (profilDevPicture === 'manAvatar4') {
    avatar = manAvatar4;
  }
  if (profilDevPicture === 'womanAvatar1') {
    avatar = womanAvatar1;
  }
  if (profilDevPicture === 'womanAvatar2') {
    avatar = womanAvatar2;
  }
  if (profilDevPicture === 'womanAvatar3') {
    avatar = womanAvatar3;
  }
  if (profilDevPicture === 'womanAvatar4') {
    avatar = womanAvatar4;
  }
  if (profilDevPicture === '') {
    avatar = '';
  }

  // const dataProfilDev = useSelector((state) => state.profilDev.register);
  // console.log('profilDEv fiche perso');
  // console.log(dataProfilDev);

  // TODO: selon d'ou je viens je n'irais
  // pas chercher les infos au même endroit:
  // TODO Développer to modify: state.profilDev.register
  // TODO Developpeur or Recruter from
  // search or recruter from favorites: state.profilDevVisit (ou un autre nom)
  // TODO dans le state profilDevVisit il
  // faudrait reprendre exactement les mêmes
  // noms de données que pour le state profilDev.register
  // TODO cela permettra de l'utiliser
  // pour stocker les données du profildev
  // selectionné via le search ou les favorites de façon indifférente.
  // TODO de plus ayant la même constructions
  // que profilDev on pourrait plus
  // facilement réutiliser les données pour l'affichage du rendu ci dessous.
  let data;
  if (fromSearch || fromFavorites) {
    data = useSelector((state) => state.modalProfil.result);
  }
  else {
    data = useSelector((state) => state.profilDev.register);
  }
  console.log(data);
  console.log(data.available_for_recruiters);

  const dispatch = useDispatch();
  return (
    logged && (
    // open/close sendMessage Modal
    <div className="profilDev">
      {sendMessage && (
        <ModalSendMessage />
      )}
      <h2 className="profilDev__title">
        Fiche développeur
      </h2>

      <header className="profilDev__header">
        <div className="profilDev__header__cadre">
          <img className="profilDev__header__cadre--img" src={avatar} alt="profil" />
        </div>
        <div className="profilDev__header__about">
          {
            // Display 'add to favorites' only if we come from search Route or Favorites Route
            (fromSearch || fromFavorites) && (
              <p
                type="button"
                className="profilDev__header__about__---favorite"
                onClick={() => {
                  dispatch(addOneFavorite());
                }}
              > FAVORIS
                <img src={addfavorites} alt="add favorites" className="profilDev__header__about--favorite" />
              </p>
            )
          }
          <h3 className="profilDev__header__about--label">
            A Propos
          </h3>
          <h4 className="profilDev__header__about--name">
            {data.firstname} {data.lastname}<span className="profilDev__header__about--city"><img src={mapPointer} alt="map pointer" className="profilDev__header__about--pointer" />{data.city}</span>
          </h4>
          <div className="profilDev__header__about--profession">
            {data.label}
          </div>
          <p className="profilDev__header__about--presentation">
            {data.description}
          </p>
          {
            // Display button 'send message' only if we come from search Route or Favorites Route
            (fromSearch || fromFavorites) && (
              <div className="profilDev__header__about__mail">
                <img src={mail} alt="envoyer mail" className="profilDev__header__about__mail--logo" />
                <p
                  type="button"
                  className="profilDev__header__about__mail--txt"
                  onClick={() => {
                    dispatch(setToggleModalSendMessage());
                  }}
                >Envoyer un message
                </p>
              </div>
            )
          }

        </div>

      </header>

      <div className="profilDev__container">
        <div className="profilDev__informations">
          <h3 className="profilDev__informations--label">
            Informations
          </h3>
          <div className="profilDev__informations__item">
            <div className="profilDev__informations__item--label"> Tél:
            </div>
            <div className="profilDev__informations__item--color">0{data.phone}
            </div>
          </div>
          <div className="profilDev__informations__item">
            <div className="profilDev__informations__item--label"> Adresse:
            </div>
            <div className="profilDev__informations__item--black">{data.zipCode} {data.city}
            </div>
          </div>
          <div className="profilDev__informations__item">
            <div className="profilDev__informations__item--label"> E-mail:
            </div>
            <div className="profilDev__informations__item--color">{data.email}
            </div>
          </div>
          <div className="profilDev__informations__item">
            <div className="profilDev__informations__item--label"> PortFolio:
            </div>
            <div className="profilDev__informations__item--color">{data.portfolio}
            </div>
          </div>
          <div className="profilDev__informations__item">
            <div className="profilDev__informations__item--label"> GitHub:
            </div>
            <div className="profilDev__informations__item--color">{data.github}
            </div>
          </div>
          {
            data.available_for_recruiters && (
              <div className="profilDev__informations__disponibility">
                <div className="profilDev__informations__disponibility--txt">
                  Disponible:
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
            !data.available_for_recruiters && (
              <div className="profilDev__informations__disponibility">
                <div className="profilDev__informations__disponibility--txt">
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

        <div className="profilDev__skills">
          <h3 className="profilDev__skills--label">
            Skills
          </h3>
          <div className="profilDev__skills__item">
            <div className="profilDev__skills__item--label"> Experience:
            </div>
            <div className="profilDev__skills__item--color">{data.experience} ans
            </div>
          </div>
          <div className="profilDev__skills__item">
            <div className="profilDev__skills__item--label">Anglais:
            </div>
            <div className="profilDev__skills__item--color">{data.english}
            </div>
          </div>
          <div className="profilDev__skills__item">
            <div className="profilDev__skills__item--container">

              { // TODO GESTION STACK ICON FROM TENS CHOICE BACK/FRONT
              }
              <div className="profilDev__skills__item--label">Stack :
              </div>
              <div className="profilDev__skills__item--color">
                {data.technology.map((item) => (
                  <div className="profilDev__skills__item--color--stack"> {item}</div>
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
