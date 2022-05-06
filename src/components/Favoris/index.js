// styles
import './favoris.scss';
import Card from './Card';

function Favoris() {
  return (
    <div className="favoris">
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
