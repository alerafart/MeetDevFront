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

function MeetDev() {
  //* state fictifs to finish static navigation
  //* in this state there are: Are you connected? (true/false)
  //* and: Are you developper or recruiter or undifined? ("dev","rec","und")
  const [isConnected, setIsConnected] = useState(false);
  const [isDevelopper, setIsDevelopper] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [role, setRole] = useState('und');

  return (
    <div className="meetdev">
      <Header
        connected={isConnected}
        setConnected={setIsConnected}
        developper={isDevelopper}
        setDevelopper={setIsDevelopper}
        recruiter={isRecruiter}
        setIsRecruiter={setIsRecruiter}
        role={role}
        setRole={setRole}
      />
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
              setIsRecruiter={setIsRecruiter}
              role={role}
              setRole={setRole}
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
        setIsRecruiter={setIsRecruiter}
        role={role}
        setRole={setRole}
      />
    </div>
  );
}

export default MeetDev;
