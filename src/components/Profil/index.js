// == Import npm
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// == Import components
import ProfilDev from '../ProfilDev';
import ProfilRecruiter from '../ProfilRecruiter';
// == Import styles
import './profil.scss';

// == Component
function Profil() {
  // state to know if user is dev or recruiter, and is logged or not
  const isDev = useSelector((state) => state.settings.log.isDev);
  const isRecruiter = useSelector((state) => state.settings.log.isRecruiter);
  const logged = useSelector((state) => state.settings.log.logged);
  // state to know if user come to search route or favorites route
  const fromSearch = useSelector((state) => state.settings.navigation.fromSearchRoute);
  const fromFavorites = useSelector((state) => state.settings.navigation.fromFavoritesRoute);

  // infos to transmit if first case:
  // const dataProfilDev = useSelector((state) => state.profilDev.register);
  // console.log('profilDEv fiche perso');

  return (
    <>
      {/* [1] If i'm Dev and Logged display ProfilDev
        in this case i pass the infos to complete the profil from state profilDev
      */}
      {
        (isDev && logged) && <ProfilDev />
      }
      {/* [2] If i'm Recruiter and Logged and come from search or favorites Route display ProfilDev
       //TODO in this case i pass the infos to complete the profil from state profilSelect?
      */}
      {
        ((isRecruiter && logged && (fromSearch || fromFavorites))) && <ProfilDev />
      }

      {/*  If i'm Recruiter and Logged display ProfilRecruiter */}
      {
        (isRecruiter && logged && !fromSearch && !fromFavorites) && <ProfilRecruiter />
      }

      {/* if i'm not logged and dev or recruiter return to home  */}
      {
        !((isDev || isRecruiter) && logged) && <Navigate to="/" />
      }
    </>

  );
}

export default Profil;
