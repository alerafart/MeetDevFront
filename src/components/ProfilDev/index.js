import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './profilDev.scss';
import man from '../../assets/images/men.png';
import mapPointer from '../../assets/images/mapPointer.png';
import mail from '../../assets/images/mail.png';
import addfavorites from '../../assets/images/addfavorites.png';
import disponible from '../../assets/images/Disponible.png';
import indisponible from '../../assets/images/indisponible.png';
// import react from '../../assets/images/react.png';
// import symfony from '../../assets/images/symfony.png';
// import html from '../../assets/images/archive/html.png';
// import css from '../../assets/images/archive/css.png';
import ModalSendMessage from '../ModalSendMessage';
import { setToggleModalSendMessage } from '../../actions/settings';
import { copyProfilDevToTemp } from '../../actions/profilDevModifyTemp';

function ProfilDev() {
  const isDev = useSelector((state) => state.settings.log.isDev);
  const logged = useSelector((state) => state.settings.log.logged);
  const sendMessage = useSelector((state) => state.settings.navigation.windowSendMessage);
  const fromSearch = useSelector((state) => state.settings.navigation.fromSearchRoute);
  const fromFavorites = useSelector((state) => state.settings.navigation.fromFavoritesRoute);

  const profilDev = useSelector((state) => state.profilDev);

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
          <img className="profilDev__header__cadre--img" src={man} alt="profil" />
        </div>
        <div className="profilDev__header__about">
          {
            // Display 'add to favorites' only if we come from search Route or Favorites Route
            (fromSearch || fromFavorites) && (
            <img src={addfavorites} alt="add favorites" className="profilDev__header__about--favorite" />

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
              <div className="profilDev__skills__item--label">Stack:
              </div>
              <div className="profilDev__skills__item__logos">
                {data.technology}
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
