// == Import npm
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

// == Import components
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Error from '../Error';
import Inscription from '../Inscription';
import Connexion from '../Connexion';
// import VerifyEmail from '../VerifyEmail';
import Search from '../Search';
import Favoris from '../Favoris';
import Profil from '../Profil';
import Modifier from '../Modify';
import Contact from '../Contact';
import MentionsLegales from '../MentionsLegales';
import EnSavoirPlus from '../EnSavoirPlus';
import HomeDeveloper from '../Home/HomeDeveloper';
import HomeRecruiter from '../Home/HomeRecruiter';
import ModalLogin from '../ModalLogin';
import Cookies from '../Cookies';
import RocketLoading from '../RocketLoading';

// == Import styles
import './meetdev.scss';

// == Component
function MeetDev() {
  // state to know if the login modal is open or close
  const windowLog = useSelector((state) => state.settings.log.windowLog);
  // state to know if the cookies are true or false
  const cookiesLoad = useSelector((state) => state.settings.log.cookiesLoad);
  // state to put loading true or false
  const loading = useSelector((state) => state.settings.navigation.loading);
  const isDark = useSelector((state) => state.settings.navigation.darkMode);

  return (
    <div className={isDark ? 'meetdevWrapper dark' : 'meetdevWrapper'}>
      <div className="meetdev">
        <Header />
        {
          windowLog && <ModalLogin />
        }
        {
          loading && (
            <RocketLoading />
          )
        }
        {
          !loading && (
            <Routes>
              <Route
                path="/"
                element={(
                  <>

                    {
                  !cookiesLoad && <Home />
                }
                    {
                  cookiesLoad && <Cookies />
                }
                  </>

            )}
              />
              <Route
                path="/email/verify/:slug"
                element={(
                  <Home />
                )}
              />
              <Route
                path="/inscription"
                element={(
                  <Inscription />
            )}
              />
              <Route
                path="/connexion"
                element={(
                  <Connexion />
            )}
              />
              <Route
                path="/recherche"
                element={(
                  <Search />
            )}
              />
              <Route
                path="/favoris"
                element={(
                  <Favoris />
            )}
              />
              <Route
                path="/profil"
                element={(
                  <Profil />
            )}
              />
              <Route
                path="/modifier"
                element={(
                  <Modifier />
            )}
              />
              <Route
                path="/contact"
                element={(
                  <Contact />
            )}
              />
              <Route
                path="/en-savoir-plus"
                element={(
                  <EnSavoirPlus />
            )}
              />
              <Route
                path="/mentions-legales"
                element={(
                  <MentionsLegales />
            )}
              />
              <Route
                path="/home-developer"
                element={(
                  <HomeDeveloper />
            )}
              />
              <Route
                path="/home-recruiter"
                element={(
                  <HomeRecruiter />
            )}
              />
              <Route
                path="/cookies"
                element={(
                  <Cookies />
            )}
              />
              <Route
                path="/loading"
                element={(
                  <RocketLoading />
            )}
              />
              <Route
                path="*"
                element={(
                  <Error />
            )}
              />
              <Route
                path="www.meetdev.henriteint.fr/*"
                element={(
                  <Error />
            )}
              />
              <Route
                path="meetdev.henriteint.fr/*"
                element={(
                  <Error />
            )}
              />
            </Routes>
          )
        }

        <Footer />
      </div>
    </div>
  );
}

export default MeetDev;
