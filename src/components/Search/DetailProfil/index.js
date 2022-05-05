import './detailProfil.scss';
import PropTypes from 'prop-types';
import man from '../../../assets/images/men.png';
import react from '../../../assets/images/react.png';
import symfony from '../../../assets/images/symfony.png';
import html from '../../../assets/images/html.png';
import css from '../../../assets/images/css.png';
import github from '../../../assets/images/github.png';
// import woman from '../../../assets/images/woman.png';
import mapPointer from '../../../assets/images/mapPointer.png';

function DetailProfil({ setOpenModal, setDetailOpen }) {
  return (
    <div className="detailProfil">
      <div className="LeftProfilContainer">
        <div className="LeftProfilContainer__avatar">
          <img
            className="LeftProfilContainer__avatar--img"
            src={man}
            alt="avatar"
          />
        </div>
        <div className="LeftProfilContainer__champ">
          <h2 className="LeftProfilContainer__champ--title">
            Agathe Feeling
          </h2>
        </div>
        <div className="LeftProfilContainer__champ">
          <div className="LeftProfilContainer__champ__ville">
            <img
              className="LeftProfilContainer__champ__ville--icon"
              src={mapPointer}
              alt="avatar"
            />
            <div className="LeftProfilContainer__champ__ville--name">
              Lyon
            </div>

          </div>
        </div>
        <div className="LeftProfilContainer__champ">
          <p className="LeftProfilContainer__champ--about">
            About Me
          </p>
          <p className="LeftProfilContainer__champ--citation">
            I got the Feeling Woohoo
          </p>
        </div>
        <div className="LeftProfilContainer__champ">
          <p className="LeftProfilContainer__champ--email">
            agat.feeling@woohoo.com
          </p>
        </div>
        <div className="LeftProfilContainer__champ">
          <p className="LeftProfilContainer__champ--phone">
            06 07 08 09 10
          </p>
        </div>
      </div>
      <div className="RightProfilContainer">
        <div className="RightProfilContainer__champ">
          <div className="RightProfilContainer__champ__logos">
            <img
              className="RightProfilContainer__champ__logos--logo"
              src={react}
              alt="react"
            />
            <img
              className="RightProfilContainer__champ__logos--logo"
              src={symfony}
              alt="symfony"
            />
            <img
              className="RightProfilContainer__champ__logos--logo"
              src={html}
              alt="html"
            />
            <img
              className="RightProfilContainer__champ__logos--logo"
              src={css}
              alt="css"
            />

          </div>

        </div>
        <div className="RightProfilContainer__champ">
          <div className="RightProfilContainer__champ--experience">
            Expérience
          </div>
          <div className="RightProfilContainer__champ--experience">
            1 à 3 ans
          </div>
        </div>
        <div className="RightProfilContainer__champ">
          <div className="RightProfilContainer__champ__github">
            <img
              className="RightProfilContainer__champ__github--logo"
              src={github}
              alt="Logo Github"
            />
            <div className="RightProfilContainer__champ__github--link">
              github.com/agathe-feeling/
            </div>

          </div>
        </div>
        <div className="RightProfilContainer__champ">
          <div className="RightProfilContainer__champ--portfolio">
            Portfolio
          </div>
          <div className="RightProfilContainer__champ--portfolioLink">
            www.agathe-feeling.fr
          </div>
        </div>
      </div>

      <div className="footerProfilContainer">
        <div className="footerProfilContainer__buttons">
          <button
            className="footerProfilContainer__buttons--button"
            type="button"
          >
            Contacter
          </button>
          <button
            className="footerProfilContainer__buttons--button"
            type="button"
          >
            Ajouter aux favoris
          </button>
          <button
            className="footerProfilContainer__buttons--button"
            type="button"
            onClick={() => {
              setOpenModal(true);
              setDetailOpen(false);
            }}
          >
            Retour Recherche
          </button>

        </div>
      </div>
    </div>
  );
}

DetailProfil.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  setDetailOpen: PropTypes.func.isRequired,
};

export default DetailProfil;
