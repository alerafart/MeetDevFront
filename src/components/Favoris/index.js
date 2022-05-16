// styles
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalProfil from '../ModalProfil';
import './favoris.scss';

import Card from './Card';
import { setFromFavoritesRoute } from '../../actions/settings';
import { recruiterFavorites } from '../../actions/middleware';

function Favoris() {
  const modalDev = useSelector((state) => state.settings.navigation.windowProfil);

  const dispatch = useDispatch();

  let favoritesArray = [];

  favoritesArray = useSelector(
    (state) => state.favorites.favorites.listFavorites.favoriteUsersData,
  );

  useEffect(() => {
    dispatch(setFromFavoritesRoute());
    dispatch(recruiterFavorites());
    console.log(favoritesArray);
  }, []);

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
          {favoritesArray?.map(

            (favorite) => (
              <Card favorite={favorite} key={favorite[0].id} />

            ),
          )}
        </div>
      </div>

    </div>

  );
}

Card.propTypes = {
  favorite: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Favoris;
