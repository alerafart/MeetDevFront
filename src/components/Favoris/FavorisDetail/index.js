import './favorisdetail.scss';
import PropTypes from 'prop-types';
import man from '../../../assets/images/men.png';
import react from '../../../assets/images/react.png';
import symfony from '../../../assets/images/symfony.png';
import html from '../../../assets/images/archive/html.png';
import css from '../../../assets/images/archive/css.png';
import github from '../../../assets/images/github.png';
import disponible from '../../../assets/images/Disponible.png';
import indisponible from '../../../assets/images/indisponible.png';
import englandFlag from '../../../assets/images/flag_england.png';
// import woman from '../../../assets/images/woman.png';
import mapPointer from '../../../assets/images/mapPointer.png';

function FavorisDetail({ setFavorisDetail }) {
  return (
    <div className="baseFavoris">
      <div className="detailFavoris">
        <h2 className="detailFavoris__title">
          Profil
        </h2>
        <div className="LeftFavorisContainer">
          <div className="LeftFavorisContainer__avatar">
            <img
              className="LeftFavorisContainer__avatar--img"
              src={man}
              alt="avatar"
            />
          </div>
          <div className="LeftFavorisContainer__champ">
            <h2 className="LeftFavorisContainer__champ--title">
              Agathe Feeling
            </h2>
          </div>
          <div className="LeftFavorisContainer__champ">
            <div className="LeftFavorisContainer__champ__ville">
              <img
                className="LeftFavorisContainer__champ__ville--icon"
                src={mapPointer}
                alt="avatar"
              />
              <div className="LeftFavorisContainer__champ__ville--name">
                Lyon
              </div>

            </div>
          </div>
          <div className="LeftFavorisContainer__champ">
            <p className="LeftFavorisContainer__champ--about">
              About Me
            </p>
            <p className="LeftFavorisContainer__champ--citation">
              I got the Feeling Woohoo
            </p>
          </div>
          <div className="LeftFavorisContainer__champ">
            <p className="LeftFavorisContainer__champ--email">
              agat.feeling@woohoo.com
            </p>
          </div>
          <div className="LeftFavorisContainer__champ">
            <p className="LeftFavorisContainer__champ--phone">
              06 07 08 09 10
            </p>
          </div>
        </div>
        <div className="RightFavorisContainer">
          <div className="RightFavorisContainer__champ">
            <div className="RightFavorisContainer__champ__disponibility">
              <img
                className="RightFavorisContainer__champ__disponibility--logo"
                src={disponible}
                alt="disponiblilité"
              />
              <div className="RightFavorisContainer__champ__disponibility--txt">
                Disponible
              </div>
            </div>
          </div>
          <div className="RightFavorisContainer__champ">
            <div className="RightFavorisContainer__champ__disponibility">
              <img
                className="RightFavorisContainer__champ__disponibility--logo"
                src={indisponible}
                alt="disponiblilité"
              />
              <div className="RightFavorisContainer__champ__disponibility--txt">
                Disponible dans 3 mois
              </div>
            </div>
          </div>

          <div className="RightFavorisContainer__champ">
            <div className="RightFavorisContainer__champ--langages">
              Langages pratiqués
            </div>
          </div>
          <div className="RightFavorisContainer__champ">
            <div className="RightFavorisContainer__champ__logos">
              <img
                className="RightFavorisContainer__champ__logos--logo"
                src={react}
                alt="react"
              />
              <img
                className="RightFavorisContainer__champ__logos--logo"
                src={symfony}
                alt="symfony"
              />
              <img
                className="RightFavorisContainer__champ__logos--logo"
                src={html}
                alt="html"
              />
              <img
                className="RightFavorisContainer__champ__logos--logo"
                src={css}
                alt="css"
              />

            </div>

          </div>
          <div className="RightFavorisContainer__champ">
            <div className="RightFavorisContainer__champ--experience">
              Expérience
            </div>
          </div>
          <div className="RightFavorisContainer__champ">
            <div className="RightFavorisContainer__champ--experienceResponse">
              1 à 3 ans
            </div>
          </div>

          <div className="RightFavorisContainer__champ">
            <div className="RightFavorisContainer__champ__langue">
              <img
                className="RightFavorisContainer__champ__langue--logo"
                src={englandFlag}
                alt="disponiblilité"
              />
              <div className="RightFavorisContainer__champ__langue--txt">
                Intermediaire
              </div>
            </div>
          </div>

          <div className="RightFavorisContainer__champ">
            <div className="RightFavorisContainer__champ__English" />
          </div>

          <div className="RightFavorisContainer__champ">
            <div className="RightFavorisContainer__champ__github">
              <img
                className="RightFavorisContainer__champ__github--logo"
                src={github}
                alt="Logo Github"
              />
              <div className="RightFavorisContainer__champ__github--link">
                github.com/agathe-feeling/
              </div>

            </div>
          </div>
          <div className="RightFavorisContainer__champ">
            <div className="RightFavorisContainer__champ--portfolio">
              Portfolio
            </div>
            <div className="RightFavorisContainer__champ--portfolioLink">
              www.agathe-feeling.fr
            </div>
          </div>
        </div>

        <div className="footerFavorisContainer">
          <div className="footerFavorisContainer__buttons">
            <button
              className="footerFavorisContainer__buttons--button"
              type="button"
            >
              Contacter
            </button>
            <button
              className="footerFavorisContainer__buttons--button"
              type="button"
            >
              Ajouter aux favoris
            </button>
            <button
              className="footerFavorisContainer__buttons--button"
              type="button"
              onClick={() => {
                setFavorisDetail(false);
              }}
            >
              Retour Favoris
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}

FavorisDetail.propTypes = {
  setFavorisDetail: PropTypes.func.isRequired,
};

export default FavorisDetail;
