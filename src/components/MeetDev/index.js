import './meetdev.scss';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

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

// import { verifyUserEmail } from '../../actions/verifiedEmail';

function MeetDev() {
  const windowLog = useSelector((state) => state.settings.log.windowLog);

  // useEffect(
  //   () => {
  //     dispatch(verifyUserEmail(slug));
  //   },
  //   [verifyUserEmail],
  // );

import RocketLoading from '../RocketLoading';

function MeetDev() {
  const windowLog = useSelector((state) => state.settings.log.windowLog);
  const cookiesLoad = useSelector((state) => state.settings.log.cookiesLoad);
  const loading = useSelector((state) => state.settings.navigation.loading);


  return (
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
  );
}

export default MeetDev;
