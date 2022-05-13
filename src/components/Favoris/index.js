// styles
import './favoris.scss';
import { useState } from 'react';
import FavorisDetail from './FavorisDetail';
import Card from './Card';

function Favoris() {
  const [favorisDetail, setFavorisDetail] = useState(false);
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
