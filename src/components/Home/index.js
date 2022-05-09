import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './home.scss';
import maps from '../../assets/images/google-maps.jpg';

function Home({ setDevelopper, setRecruiter }) {
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
        <button className="home__choice--button" type="button" onClick={() => setDevelopper(true)}>
          <Link to="/home-developer">Développeur</Link>
        </button>
        <button className="home__choice--button" type="button" onClick={() => setRecruiter(true)}>
          <Link to="/home-recruiter">Recruteur</Link>
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

Home.propTypes = {
  // connected: PropTypes.bool.isRequired,
  // setConnected: PropTypes.func.isRequired,
  // developper: PropTypes.bool.isRequired,
  setDevelopper: PropTypes.func.isRequired,
  // recruiter: PropTypes.bool.isRequired,
  setRecruiter: PropTypes.func.isRequired,
  // role: PropTypes.string.isRequired,
  // setRole: PropTypes.func.isRequired,
};

export default Home;
