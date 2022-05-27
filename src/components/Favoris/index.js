// == Import : npm
import { useSelector } from 'react-redux';
// Import component
import ModalProfil from '../ModalProfil';
import Card from './Card';
// == Import styles
import './favoris.scss';

// == Component
function Favoris() {
  // to display/notDisplay modal profil dev selected
  const modalDev = useSelector((state) => state.settings.navigation.windowProfil);

  // Recup array list of favorites
  const favoritesArray = useSelector(
    (state) => state.favorites.favorites.listFavorites,
  );

  return (
    <div className="wrapper">
      <h2 className="banniere"> Mes profils favoris </h2>
      <div className="favoris">
        {/* {// if click on card, open the modal profile} */}
        {
          modalDev
          && (
          <ModalProfil />
          )
        }

        <div className="favoris__card">
          { // display all favorites cards
            favoritesArray?.map(
              (favorite) => (

                <Card favorite={favorite} key={favorite.data.id} />

              ),
            )
          }
        </div>
      </div>

    </div>

  );
}

// Card.propTypes = {
//   favorite: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//   ).isRequired,
// };

export default Favoris;
