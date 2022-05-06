import './meetdev.scss';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Error from '../Error';
import Inscription from '../Inscription';
import Connexion from '../Connexion';
import Search from '../Search';
import Favoris from '../Favoris';
import Profil from '../Profil';
import Contact from '../Contact';
import MentionsLegales from '../MentionsLegales';
import EnSavoirPlus from '../EnSavoirPlus';
import HomeDeveloper from '../Home/HomeDeveloper';
import HomeRecruiter from '../Home/HomeRecruiter';
import RecruiterProfile from '../RecruiterProfil';

function MeetDev() {
  return (
    <div className="meetdev">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
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
          path="/recruiter-profile"
          element={(
            <RecruiterProfile />
          )}
        />
        <Route
          path="*"
          element={
            <Error />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default MeetDev;
