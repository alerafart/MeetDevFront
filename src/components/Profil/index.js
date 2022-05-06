// styles
import './profil.scss';
import { useState } from 'react';
import ProfilDevModify from './ProfilDevModify';
import Agathe from '../../assets/images/agathe-feeling.jpg';
import html from '../../assets/images/html.png';
import php from '../../assets/images/php.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import github from '../../assets/images/github.png';
import portfolio from '../../assets/images/portfolio.jpg';

function Profil() {
  const [modifyInformation, setModifyInformation] = useState(false);
  return (
    <>
      {
        modifyInformation && <ProfilDevModify setModifyInformation={setModifyInformation} />
      }
      {
        !modifyInformation && (
          <div className="profil">
            <div className="profil__leftpart">
              <img
                className="profil__picture__img"
                src={Agathe}
                alt="profil"
              />

              <h3 className="profil__informations--name">Agathe Feeling</h3>
              <p className="profil__informations--localisation">Lyon</p>

              <p className="profil__informations--aboutme">About me</p>
              <p className="profil__informations--description"> "I gotta feeling WOOHOO"</p>
              <p className="profil__informations--email">agat.feeling@woohoo.com</p>
              <p className="profil__informations--phone">0607080910</p>
            </div>

            <div className="profil__rightpart">

              <div className="profil__informations--checkbox">
                <label htmlFor="switch" className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round" />
                </label>
                <p className="profil__informations--visibility">Profil visible</p>
              </div>
              <div className="profil__informations--selectedlanguages">
                <p className="profil__informations--string"> Langages pratiqués </p>
                <ul className="profil__informations--languages">
                  <li className="profil__informations--language"><img alt="logo html" src={html} className="profil__informations--language--picture" /></li>
                  <li className="profil__informations--language"><img alt="logo php" src={php} className="profil__informations--language--picture" /></li>
                  <li className="profil__informations--language"><img alt="logo css" src={css} className="profil__informations--language--picture" /></li>
                  <li className="profil__informations--language"><img alt="logo js" src={js} className="profil__informations--language--picture" /></li>

                </ul>
              </div>
              <div className="profil__informations--experiences">
                <p className="profil__informations--experience">Expérience</p>
                <p className="profil__informations--experience">1 à 3 ans</p>
              </div>
              <div className="profil__informations--site">
                <div className="profil__informations__github">
                  <img
                    className="profil__informations__github--img"
                    src={github}
                    alt="github logo"
                  />
                  <p className="profil__informations__github--link"><a htmlFor="link" target="blank" href="github.com/agathe-feeling/">github.com/agathe-feeling/</a></p>
                </div>
                <div className="profil__informations__othersite">
                  <img
                    className="profil__informations__othersite--img"
                    src={portfolio}
                    alt="portfolio logo"
                  />
                  <p className="profil__informations__othersite--link"><a htmlFor="link" target="blank" href="agathe-feeling.fr">agathe-feeling.fr</a></p>
                </div>
              </div>

            </div>

            <div className="profil__modify">

              <button
                className="profil__modify__form"
                type="button"
                onClick={() => setModifyInformation(true)}
              >
                Modifier mes informations
              </button>

            </div>
          </div>
        )
      }
    </>

  );
}

export default Profil;
