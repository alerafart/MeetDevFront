import './card.scss';
import PropTypes from 'prop-types';
import men from '../../../assets/images/men.png';
import javascript from '../../../assets/images/js.png';

function Card({ setFavorisDetail }) {
  return (

    <div className="card">
      <div className="card__avatar">
        <img src={javascript} alt="Avatar" className="card__avatar--logo" />
        <img src={men} alt="Avatar" className="card__avatar--img" />
      </div>
      <div className="card__container">
        <h4 className="card__container--name">Jean Aimarre</h4>
        <p className="card__container--localisation">Lyon</p>
        <p className="card__container--experience">Experience <span className="card__container--experience--year"> -1 an</span></p>
      </div>
      <div className="card__button">
        <button
          type="button"
          onClick={() => {
            setFavorisDetail(true);
          }}
          className="card__button--profileview"
        >Voir le profil
        </button>
        <button
          type="button"
          className="card__button--delete"
        >supprimer
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  setFavorisDetail: PropTypes.func.isRequired,
};

export default Card;
