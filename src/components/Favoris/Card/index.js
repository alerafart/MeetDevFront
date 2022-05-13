import './card.scss';
import { useDispatch } from 'react-redux';
import men from '../../../assets/images/men.png';
import javascript from '../../../assets/images/js.png';
import { setToggleModalProfil } from '../../../actions/settings';

function Card() {
  const dispatch = useDispatch();
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
            dispatch(setToggleModalProfil());
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

export default Card;
