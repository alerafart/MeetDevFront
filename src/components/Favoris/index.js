import { useSelector } from 'react-redux';
import './favoris.scss';

import ModalProfil from '../ModalProfil';
import Card from './Card';

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
