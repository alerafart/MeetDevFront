// == Import npm
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// == Import component
import ModifyDev from '../ModifyDev';
import ModifyRecruiter from '../ModifyRecruiter';
// == Import styles
import './modify.scss';
// == Component
function Modify() {
  // state to know if user is dev or recruiter and is logged or not
  const isDev = useSelector((state) => state.settings.log.isDev);
  const isRecruiter = useSelector((state) => state.settings.log.isRecruiter);
  const logged = useSelector((state) => state.settings.log.logged);
  return (
    <>
      {/* If Dev and Logged display ModifyDev */}
      {
        (isDev && logged) && <ModifyDev />
      }

      {/* If Recruiter and Logged display ModifyRecruiter */}
      {
        (isRecruiter && logged) && <ModifyRecruiter />
      }

      {/* if not isDev and not isRecruiter or if not logged return to home  */}
      {
        ((!isDev && !isRecruiter) || !logged) && <Navigate to="/" />
      }
    </>

  );
}

export default Modify;
