// styles
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ModalProfil from '../ModalProfil';
import './favoris.scss';

import Card from './Card';
import { setFromFavoritesRoute } from '../../actions/settings';

function Favoris() {
  const modalDev = useSelector((state) => state.settings.navigation.windowProfil);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFromFavoritesRoute());
  });
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>

    </div>

  );
}

export default Favoris;
