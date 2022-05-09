import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './profilDev.scss';
import man from '../../assets/images/men.png';
import mapPointer from '../../assets/images/mapPointer.png';
import mail from '../../assets/images/mail.png';
import addfavorites from '../../assets/images/addfavorites.png';
import disponible from '../../assets/images/Disponible.png';
import indisponible from '../../assets/images/indisponible.png';
import react from '../../assets/images/react.png';
import symfony from '../../assets/images/symfony.png';
import html from '../../assets/images/archive/html.png';
import css from '../../assets/images/archive/css.png';
import ModalSendMessage from '../ModalSendMessage';
import { setToggleModalSendMessage } from '../../actions/settings';

function ProfilDev() {
  const isDev = useSelector((state) => state.settings.log.isDev);
  const logged = useSelector((state) => state.settings.log.logged);
  const sendMessage = useSelector((state) => state.settings.navigation.windowSendMessage);
  console.log(sendMessage);
  console.log(logged);
  const dispatch = useDispatch();
  return (
    logged && (

    // <div className="search">
    <div className="profilDev">
      {sendMessage && (
        <ModalSendMessage />
      )}
      <h2 className="profilDev__title">
        Fiche développeur
      </h2>

      <header className="profilDev__header">
        <div className="profilDev__header__cadre">
          <img className="profilDev__header__cadre--img" src={man} alt="profil" />
        </div>
        <div className="profilDev__header__about">
          <img src={addfavorites} alt="add favorites" className="profilDev__header__about--favorite" />
          <h3 className="profilDev__header__about--label">
            A Propos
          </h3>
          <h4 className="profilDev__header__about--name">
            Agathe Feeling <span className="profilDev__header__about--city"><img src={mapPointer} alt="map pointer" className="profilDev__header__about--pointer" />Lyon</span>
          </h4>
          <div className="profilDev__header__about--profession">
            Developpeur Front-End React
          </div>
          <p className="profilDev__header__about--citation">I got the Feeling Woohoo</p>
          <p className="profilDev__header__about--presentation">This is a little presentation of Agathe Feeling. I'm a curious developper but my memory is like a red fish. I search full remote work.</p>
          <div className="profilDev__header__about__mail">
            <img src={mail} alt="envoyer mail" className="profilDev__header__about__mail--logo" />
            <p
              type="button"
              className="profilDev__header__about__mail--txt"
              onClick={() => {
                console.log('essai');
                dispatch(setToggleModalSendMessage());
              }}
            >Envoyer un message
            </p>
          </div>

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
            <div className="profilDev__informations__item--color">06 07 08 09
            </div>
          </div>
          <div className="profilDev__informations__item">
            <div className="profilDev__informations__item--label"> Adresse:
            </div>
            <div className="profilDev__informations__item--black">19 rue des Lumières 69000 Lyon
            </div>
          </div>
          <div className="profilDev__informations__item">
            <div className="profilDev__informations__item--label"> E-mail:
            </div>
            <div className="profilDev__informations__item--color">agathe.feeling@woohoo.com
            </div>
          </div>
          <div className="profilDev__informations__item">
            <div className="profilDev__informations__item--label"> PortFolio:
            </div>
            <div className="profilDev__informations__item--color">www.agathe-feeling.fr
            </div>
          </div>
          <div className="profilDev__informations__item">
            <div className="profilDev__informations__item--label"> GitHub:
            </div>
            <div className="profilDev__informations__item--color">github.com/agathe-feeling/
            </div>
          </div>
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
        </div>

        <div className="profilDev__skills">
          <h3 className="profilDev__skills--label">
            Skills
          </h3>
          <div className="profilDev__skills__item">
            <div className="profilDev__skills__item--label"> Experience:
            </div>
            <div className="profilDev__skills__item--color">1 à 3 ans
            </div>
          </div>
          <div className="profilDev__skills__item">
            <div className="profilDev__skills__item--label">Anglais:
            </div>
            <div className="profilDev__skills__item--color">Intermédiaire
            </div>
          </div>
          <div className="profilDev__skills__item">
            <div className="profilDev__skills__item--container">
              <div className="profilDev__skills__item--label">Stack:
              </div>
              <div className="profilDev__skills__item__logos">
                <img src={react} alt="logo react" className="profilDev__skills__item__logos--logo" />
                <img src={symfony} alt="logo symfony" className="profilDev__skills__item__logos--logo" />
                <img src={html} alt="logo html" className="profilDev__skills__item__logos--logo" />
                <img src={css} alt="logo css" className="profilDev__skills__item__logos--logo" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="profilDev__buttons">
        <button
          className="profilDev__buttons--button"
          type="button"
          onClick={() => {
          }}
        >
          Retour
        </button>

      </div>

      { isDev && (
      <div className="profilDev__buttons">
        <Link to="/modifier">
          <button
            className="profilDev__buttons--button"
            type="button"
            onClick={() => {
            }}
          >
            Modifier
          </button>
        </Link>
      </div>

      )}
    </div>
    // </div>

    )

  );
}

export default ProfilDev;
