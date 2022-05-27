// == Import : npm
import { useSelector } from 'react-redux';
// Import composant
import ModalProfil from '../ModalProfil';
import Card from './Card';
// == Import styles
import './favoris.scss';

// == Composant
function Favoris() {
  // to display/notDisplay modal profil dev selected
  const modalDev = useSelector((state) => state.settings.navigation.windowProfil);
  const isDark = useSelector((state) => state.settings.navigation.darkMode);

  // Recup array list of favorites
  const favoritesArray = useSelector(
    (state) => state.favorites.favorites.listFavorites,
  );

  return (
    <div className={isDark ? 'wrapper dark' : 'wrapper'}>
      <h2 className="banniere"> Mes profils favoris </h2>
      <div className={isDark ? 'favoris dark' : 'favoris'}>
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
