// styles
import { useSelector, useDispatch } from 'react-redux';
import ModalProfil from '../ModalProfil';
import './favoris.scss';

import Card from './Card';
import { setFromFavoritesRoute } from '../../actions/settings';

function Favoris() {
  const modalDev = useSelector((state) => state.settings.navigation.windowProfil);
  const dispatch = useDispatch();
  dispatch(setFromFavoritesRoute());
  return (

    <div className="favoris">
      {
        modalDev
        && (
        <ModalProfil />
        )
      }

      <h1 className="favoris__title"> Mes profils favoris </h1>
      <div className="favoris__card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>

  );
}

export default Favoris;
