// TODO useState utilisé pour la modale
// TODO en attendant qu'un store soit crée
import { useState } from 'react';
import PropTypes from 'prop-types';

import './search.scss';
import Card from './Card';
import ModalProfil from './ModalProfil';
import ProfilDev from '../ProfilDev';

function Search({ setCloseDevModal }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <div className="search">
      {
        detailOpen && <ProfilDev setOpenModal={setModalOpen} setDetailOpen={setDetailOpen} />
      }
      {
        modalOpen
        && (
        <ModalProfil
          setOpenModal={setModalOpen}
          setDetailOpen={setDetailOpen}
          setCloseDevModal={setCloseDevModal}
        />
        )
      }
      {
        !detailOpen && (
        <>
          <h2 className="search__title">
            Filtres de recherche
          </h2>
          <form className="search__filter">
            <div className="search__filter__champ">
              <div className="search__filter__champ--label">
                Ville
              </div>
              <input className="search__filter__champ--input" type="text" />
            </div>
            <div className="search__filter__champ">
              <div className="search__filter__champ--label">
                Language
              </div>
              <select className="search__filter__champ--input">
                <option value="Symfony" selected>Symfony</option>
                <option value="React">React</option>
              </select>
            </div>
            <div className="search__filter__champ">
              <div className="search__filter__champ--label">
                Expérience
              </div>
              <div className="search__filter__champ--radio">
                <label className="search__filter__champ--radio--item" htmlFor="exp1">
                  <input checked type="radio" value="exp1" name="exp1" />
                  - 1 an
                </label>
                <label className="search__filter__champ--radio--item" htmlFor="exp2">
                  <input type="radio" value="exp2" name="exp2" />
                  1 à 3 ans
                </label>
                <label className="search__filter__champ--radio--item" htmlFor="exp3">
                  <input type="radio" value="exp3" name="exp3" />
                  + 3 ans
                </label>
              </div>
            </div>
            <div className="search__filter__champ">
              <div className="search__filter__champ--label">
                Disponibilité
              </div>
              <div className="search__filter__champ--radio">
                <label className="search__filter__champ--radio--item" htmlFor="immediatly">
                  <input checked type="radio" value="immadiatly" name="immediatly" />
                  Immédiate
                </label>
                <label className="search__filter__champ--radio--item" htmlFor="soon">
                  <input type="radio" name="soon" />
                  3 mois
                </label>
              </div>
            </div>
            <button type="submit" className="search__filter--button">
              Filtrer
            </button>
          </form>

          <h2 className="search__title">
            {10} développeurs proches de vous
          </h2>

          <div className="result">
            {/* //TODO Boucle avec les resultats .map
            afficher le sous composant Title
            =>  Afficherai sous forme de modale composant Profil (frame Profil Dev)
          */}
            <Card
              setOpenModal={setModalOpen}
              avatar="man"
              lastname="Lafritte"
              firstname="Jerome"
            />
            <Card
              setOpenModal={setModalOpen}
              avatar="woman"
              lastname="Feeling"
              firstname="Agathe"
            />
            <Card
              setOpenModal={setModalOpen}
              avatar="man"
              lastname="Lafritte"
              firstname="Jerome"
            />
            <Card
              setOpenModal={setModalOpen}
              avatar="woman"
              lastname="Feeling"
              firstname="Agathe"
            />
            <Card
              setOpenModal={setModalOpen}
              avatar="man"
              lastname="Lafritte"
              firstname="Jerome"
            />
            <Card
              setOpenModal={setModalOpen}
              avatar="woman"
              lastname="Feeling"
              firstname="Agathe"
            />
            <Card
              setOpenModal={setModalOpen}
              avatar="man"
              lastname="Lafritte"
              firstname="Jerome"
            />
            <Card
              setOpenModal={setModalOpen}
              avatar="woman"
              lastname="Feeling"
              firstname="Agathe"
            />
            <Card
              setOpenModal={setModalOpen}
              avatar="man"
              lastname="Lafritte"
              firstname="Jerome"
            />
            <Card
              setOpenModal={setModalOpen}
              avatar="woman"
              lastname="Feeling"
              firstname="Agathe"
            />
          </div>
        </>

        )
      }
    </div>
  );
}

Search.propTypes = {
  setCloseDevModal: PropTypes.func.isRequired,
};

export default Search;
