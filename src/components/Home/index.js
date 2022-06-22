import { Link, Navigate, useParams } from 'react-router-dom';
import './home.scss';

// import express from 'express';

import { useDispatch, useSelector } from 'react-redux';
// == Import action creator
import { isDev, isRecruiter } from '../../actions/settings';
import { verifyUserEmail, hasSlug } from '../../actions/verifiedEmail';
import rocket from '../../assets/images/rocket.png';

function Home() {
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch();
  // function to select state settings to know if the user is logged or not
  const isLogged = useSelector((state) => state.settings.log.logged);
  const isVerified = useSelector((state) => state.verifyEmail.emailVerified);
  const params = useParams();
  // console.log(params);
  const { slug } = params;
  // console.log(slug);

  if ((slug !== undefined) && (isVerified === false)) {
    dispatch(verifyUserEmail(slug));
    dispatch(hasSlug(true));
  }
  // useEffect(() => {
  //   dispatch(setFromAway());
  // }, []);

  return (
    <>
      {/* if islogged is true the user goes to his profile */}
      {
      isLogged && <Navigate to="/profil" />
    }
      {/* if islogged is false the user goes to home page */}
      {
      (!isLogged) && (
        <div
          className={isDark ? 'home dark' : 'home'}

        >

          <div className={isDark ? 'home__header dark' : 'home__header'}>
            <img
              className="home__header--img"
              src={rocket}
              alt="maps"
            />
            <h1 className={isDark ? 'home__header--title dark' : 'home__header--title'}>Meet Dev</h1>

          </div>
          <p className={isDark ? 'home__slogan dark' : 'home__slogan'}>Match Your Future Developer</p>

          <div className="home__citation">
            <h2 className={isDark ? 'home__citation--citation dark' : 'home__citation--citation'}>
              Shoot for the moon even if you miss you'll land among the stars
            </h2>
            <p className={isDark ? 'home__citation--author dark' : 'home__citation--author'}>
              Oscar Wilde
            </p>
            <div className={isDark ? 'home__citation--iam dark' : 'home__citation--iam'}>
              Je suis
            </div>

          </div>

          <form className="home__choice">
            <Link to="/home-developer">
              {/* button to go in the home page developer */}
              <button
                className="home__choice--button"
                type="button"
                onClick={() => {
                  dispatch(isDev());
                  window.scrollTo(0, 0);
                }}
              >
                Dev
              </button>
            </Link>
            <Link to="/home-recruiter">
              {/* button to go in the home page recruiter */}
              <button
                className="home__choice--button"
                type="button"
                onClick={() => {
                  dispatch(isRecruiter());
                  window.scrollTo(0, 0);
                }}
              >
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
