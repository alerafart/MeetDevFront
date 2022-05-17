import './modalprofil.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import react from '../../assets/images/react.png';
import symfony from '../../assets/images/symfony.png';
import html from '../../assets/images/archive/html.png';
import css from '../../assets/images/archive/css.png';
import mapPointer from '../../assets/images/mapPointer.png';
import { setToggleModalProfil } from '../../actions/settings';

function ModalProfil() {
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.modalProfil.result.firstname);
  const lastname = useSelector((state) => state.modalProfil.result.lastname);
  const city = useSelector((state) => state.modalProfil.result.city);
  const experience = useSelector((state) => state.modalProfil.result.experience);
  const languages = useSelector((state) => state.modalProfil.result.technology);
  const avatar = useSelector((state) => state.modalProfil.result.profilePicture);

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
          <div className="modalContainer__main--left">&#x3C;</div>
          <div className="modalContainer__main__profil">
            <div className="modalContainer__main__profil--item">
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
            <div className="modalContainer__main__profil--item">
              Expérience
            </div>
            <div className="modalContainer__main__profil--item">
              {experience === 1 ? '- de 1 an' : '1 à 3 ans'}
            </div>
            <div className="modalContainer__main__profil--item">
              Langages
            </div>
            <div className="modalContainer__main__profil--logos">
              {languages}
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
