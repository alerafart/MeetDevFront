import { Link } from 'react-router-dom';
import './home.scss';
import { useDispatch } from 'react-redux';
import maps from '../../assets/images/google-maps.jpg';
import { isDev, isRecruiter, setFromAway } from '../../actions/settings';
import { setTestConnexionBack } from '../../actions/middleware';

function Home() {
  const dispatch = useDispatch();
  dispatch(setFromAway());
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__header--title">Meet Dev</h1>
        <p className="home__header--slogan">Match Your Future Developer</p>
      </div>

      <div className="home__citation">
        <h2 className="home__citation--citation">
          Shoot for the moon even if you miss you'll land among the stars
        </h2>
        <p className="home__citation--author">
          Oscar Wilde
        </p>
      </div>

      <form className="home__choice">
        <Link to="/home-developer">
          <button className="home__choice--button" type="button" onClick={() => dispatch(isDev())}>
            Développeur
          </button>
        </Link>
        <Link to="/home-recruiter">
          <button className="home__choice--button" type="button" onClick={() => dispatch(isRecruiter())}>
            Recruteur
          </button>
        </Link>
        <button className="home__choice--button" type="button" onClick={() => dispatch(setTestConnexionBack())}>
          Test Back
        </button>
      </form>
      <div className="home__map">
        <img
          className="home__map--img"
          src={maps}
          alt="maps"
        />
      </div>
    </div>
  );
}

export default Home;
