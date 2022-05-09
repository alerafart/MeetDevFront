import './modalprofil.scss';
import PropTypes from 'prop-types';
import react from '../../../assets/images/react.png';
import symfony from '../../../assets/images/symfony.png';
import html from '../../../assets/images/archive/html.png';
import css from '../../../assets/images/archive/css.png';
import man from '../../../assets/images/men.png';
import mapPointer from '../../../assets/images/mapPointer.png';
// import woman from '../../../assets/images/woman.png';

function ModalProfil({ setOpenModal, setDetailOpen, setCloseDevModal }) {
  return (
    <div
      className="modalBackground"
    >
      <div className="modalContainer">
        <div className="modalContainer__exit">
          <button
            className="modalContainer__exit--button"
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <header className="modalContainer__header">
          <img
            className="modalContainer__header--avatar"
            src={man}
            alt="avatar"
          />
        </header>
        <main className="modalContainer__main">
          <div className="modalContainer__main--left">&#x3C;</div>
          <div className="modalContainer__main__profil">
            <div className="modalContainer__main__profil--item">
              Jean Aimarre
            </div>
            <div className="modalContainer__main__profil--item">
              <div className="modalContainer__main__profil--item--adress">
                <img
                  className="modalContainer__main__profil--item--adress--icon"
                  src={mapPointer}
                  alt="avatar"
                />
                <div className="modalContainer__main__profil--item--adress--ville">
                  Lyon
                </div>
              </div>
            </div>
            <div className="modalContainer__main__profil--item">
              Expérience
            </div>
            <div className="modalContainer__main__profil--item">
              1 à 3 ans
            </div>
            <div className="modalContainer__main__profil--item">
              Langages
            </div>
            <div className="modalContainer__main__profil--logos">
              <img
                className="modalContainer__main__profil--logos--logo"
                src={react}
                alt="react"
              />
              <img
                className="modalContainer__main__profil--logos--logo"
                src={symfony}
                alt="symfony"
              />
              <img
                className="modalContainer__main__profil--logos--logo"
                src={html}
                alt="html"
              />
              <img
                className="modalContainer__main__profil--logos--logo"
                src={css}
                alt="css"
              />

            </div>
          </div>
          <div className="modalContainer__main--right">&gt;</div>
          <div className="modalContainer__footer">
            <button
              className="modalContainer__footer--button"
              type="button"
              onClick={() => {
                setCloseDevModal(true);
              }}
            >
              Contacter
            </button>
            <button
              className="modalContainer__footer--button"
              type="button"
              onClick={() => {
                setOpenModal(false);
                setDetailOpen(true);
              }}
            >
              Voir Profil
            </button>
            <button
              className="modalContainer__footer--button"
              type="button"
            >
              Ajouter aux Favoris
            </button>
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

ModalProfil.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  setDetailOpen: PropTypes.func.isRequired,
  setCloseDevModal: PropTypes.func.isRequired,
};

export default ModalProfil;
