// styles
import './profil.scss';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ProfilDev from '../ProfilDev';
import ProfilRecruiter from '../ProfilRecruiter';

function Profil() {
  const isDev = useSelector((state) => state.settings.log.isDev);
  const isRecruiter = useSelector((state) => state.settings.log.isRecruiter);
  const logged = useSelector((state) => state.settings.log.logged);
  const fromSearch = useSelector((state) => state.settings.navigation.fromSearchRoute);
  const fromFavorites = useSelector((state) => state.settings.navigation.fromFavoritesRoute);

  return (
    // TODO prise en charge si recruiter ou recherche dev ou recruiter mais page
    // origine = recherche ou favoris = afficher profil dev
    // et sans modifier sinon afficher profil dev+modifier ou profilrecruiter+modifier
    <>
      {/* If Dev and Logged display ProfilDev */}
      {
        (isDev && logged) && <ProfilDev />
      }
      {/* If Recruiter and Logged display ProfilRecruiter */}
      {
        ((isRecruiter && logged && (fromSearch || fromFavorites))) && <ProfilDev />
      }

      {/* If Recruiter and Logged display ProfilRecruiter */}
      {
        (isRecruiter && logged && !fromSearch && !fromFavorites) && <ProfilRecruiter />
      }

      {/* if not isDev and not isCrecruiter or if not logged return to home  */}
      {
        ((!isDev && !isRecruiter) || !logged) && <Navigate to="/" />
      }
    </>

  );
}

export default Profil;
