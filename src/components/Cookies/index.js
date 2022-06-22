// styles
import './cookies.scss';
import { useDispatch, useSelector } from 'react-redux';

import { closeCookies } from '../../actions/settings';
// == Import styles

// == Component
function Cookies() {
  // const cookiesLoad = useSelector((state) => state.settings.log.cookiesLoad);
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  return (
    <div className={isDark ? 'cookies dark' : 'cookies'}>
      <h3 className={isDark ? 'cookies__title dark' : 'cookies__title'}>Nous utilisons des cookies</h3>
      <p className={isDark ? 'cookies__content dark' : 'cookies__content'}>Nous utilisons des cookies et d'autres technologies de suivi pour améliorer
        votre expérience de navigation sur notre site.
      </p>
      <div className="cookies__button">
        {/* button to close the window and TODO accept the cookies */}
        <button
          type="button"
          className={isDark ? 'cookies__button--agree dark' : 'cookies__button--agree'}
          onClick={() => {
            dispatch(closeCookies());
            // save in sessionStorage user cookiesChoice
            sessionStorage.setItem('cookiesChoice', JSON.stringify('accepted'));
          }}
        >J'accepte
        </button>
        {/* button to close the window and TODO refuse the cookies */}
        <button
          type="button"
          className={isDark ? 'cookies__button--disagree dark' : 'cookies__button--disagree'}
          onClick={() => {
            dispatch(closeCookies());
            // save in sessionStorage user cookiesChoice
            sessionStorage.setItem('cookiesChoice', JSON.stringify('refused'));
            // console.log('refuse button');
          }}
        >Je refuse
        </button>
      </div>

      <div id="all" />
    </div>
  );
}

export default Cookies;
