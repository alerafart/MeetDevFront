// styles
import './favoris.scss';
import { useState } from 'react';
import FavorisDetail from './FavorisDetail';
import Card from './Card';
<<<<<<< HEAD

function Favoris() {
  const [favorisDetail, setFavorisDetail] = useState(false);
=======
import { setFromFavoritesRoute } from '../../actions/settings';
import { recruiterFavorites } from '../../actions/middleware';

function Favoris() {
  const modalDev = useSelector((state) => state.settings.navigation.windowProfil);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFromFavoritesRoute());
    dispatch(recruiterFavorites());
  });

>>>>>>> redux-store
  return (
    <>
      {
        favorisDetail && <FavorisDetail setFavorisDetail={setFavorisDetail} />
      }
      {
        !favorisDetail && (
          <div className="favoris">
            <h1 className="favoris__title"> Mes profils favoris </h1>
            <div className="favoris__card">
              <Card setFavorisDetail={setFavorisDetail} />
              <Card setFavorisDetail={setFavorisDetail} />
              <Card setFavorisDetail={setFavorisDetail} />
              <Card setFavorisDetail={setFavorisDetail} />
              <Card setFavorisDetail={setFavorisDetail} />

            </div>
          </div>
        )
      }
    </>
  );
}

export default Favoris;
