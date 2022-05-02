import './meetdev.scss';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Error from '../Error';

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
