// == Import
import gif from '../../assets/images/gif_404.gif';
import './error.scss';

// == Composant
function Error() {
  return (
    <div className="error">
      <div className="error__gif">
        <img
          className="error__gif--img"
          src={gif}
          alt="gif 404"
        />
      </div>
    </div>
  );
}

export default Error;
