import './meetdev.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

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
import RecruiterProfilModify from '../RecruiterProfil/RecruiterProfilModify';
import ModalLogin from '../ModalLogin';
import ModalDevContact from '../ModalDevContact';

function MeetDev() {
  //* state fictifs to finish static navigation
  //* in this state there are: Are you connected? (true/false)
  //* and: Are you developper or recruiter or undifined? ("dev","rec","und")
  //* new state for modal login on or off. For the moment, activable
  //* with the top button connexion
  //* new state for modal contactDev on or off.
  const [isConnected, setIsConnected] = useState(false);
  const [isDevelopper, setIsDevelopper] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalDevContact, setIsModalDevContact] = useState(false);

  return (
    <div className="meetdev">
      <Header
        connected={isConnected}
        setConnected={setIsConnected}
        developper={isDevelopper}
        setDevelopper={setIsDevelopper}
        recruiter={isRecruiter}
        setRecruiter={setIsRecruiter}
        setOpenModal={setIsModalLogin}
      />
      {
        isModalLogin && <ModalLogin setCloseModal={setIsModalLogin} />
      }
      {
        isModalDevContact && <ModalDevContact setCloseModal={setIsModalDevContact} />
      }
      <Routes>
        <Route
          path="/"
          element={(
            <Home
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/inscription"
          element={(
            <Inscription
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/connexion"
          element={(
            <Connexion
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/recherche"
          element={(
            <Search
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
              setCloseDevModal={setIsModalDevContact}
            />
          )}
        />
        <Route
          path="/favoris"
          element={(
            <Favoris
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/profil"
          element={(
            <Profil
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/contact"
          element={(
            <Contact
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/en-savoir-plus"
          element={(
            <EnSavoirPlus
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/mentions-legales"
          element={(
            <MentionsLegales
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/home-developer"
          element={(
            <HomeDeveloper
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/home-recruiter"
          element={(
            <HomeRecruiter
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/recruiter-profile"
          element={(
            <RecruiterProfile
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="/recruiter-modify"
          element={(
            <RecruiterProfilModify
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
        <Route
          path="*"
          element={(
            <Error
              connected={isConnected}
              setConnected={setIsConnected}
              developper={isDevelopper}
              setDevelopper={setIsDevelopper}
              recruiter={isRecruiter}
              setRecruiter={setIsRecruiter}
            />
          )}
        />
      </Routes>
      <Footer
        connected={isConnected}
        setConnected={setIsConnected}
        developper={isDevelopper}
        setDevelopper={setIsDevelopper}
        recruiter={isRecruiter}
        setRecruiter={setIsRecruiter}
      />
    </div>
  );
}

export default MeetDev;
