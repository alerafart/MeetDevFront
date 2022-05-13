import { Link, Navigate } from 'react-router-dom';
import './home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import rocket from '../../assets/images/rocket.png';
// import background from '../../assets/images/backgroundMain.png';
import { isDev, isRecruiter, setFromAway } from '../../actions/settings';

function Home() {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.settings.log.logged);

  useEffect(() => {
    dispatch(setFromAway());
  });

  return (
    <>
      {
      isLogged && <Navigate to="/profil" />
    }
      {
      (!isLogged) && (
        <div
          className="home"

        >

          <div className="home__header">
            <img
              className="home__header--img"
              src={rocket}
              alt="maps"
            />
            <h1 className="home__header--title">Meet Dev</h1>

          </div>
          <p className="home__slogan">Match Your Future Developer</p>

          <div className="home__citation">
            <h2 className="home__citation--citation">
              Shoot for the moon even if you miss you'll land among the stars
            </h2>
            <p className="home__citation--author">
              Oscar Wilde
            </p>
            <div className="home__citation--iam">
              Je suis
            </div>

          </div>

          <form className="home__choice">
            <Link to="/home-developer">
              <button className="home__choice--button" type="button" onClick={() => dispatch(isDev())}>
                Dev
              </button>
            </Link>
            <Link to="/home-recruiter">
              <button className="home__choice--button" type="button" onClick={() => dispatch(isRecruiter())}>
                Recruteur
              </button>
            </Link>
          </form>
          {/* <div className="home__map">
            <img
              className="home__map--img"
              src={maps}
              alt="maps"
            />
          </div> */}
          {/* <div className="home__background">
            <img
              className="home__background--img"
              src={background}
              alt="maps"
            />

          </div> */}
        </div>
      )
    }
    </>
  );
}

export default Home;
