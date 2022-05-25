// == Import npm
import { useDispatch } from 'react-redux';
// == Import action creator
import { closeCookies } from '../../actions/settings';
// == Import styles
import './cookies.scss';
// == Component
function Cookies() {
  // const cookiesLoad = useSelector((state) => state.settings.log.cookiesLoad);
  const dispatch = useDispatch();
  return (
    <div className="cookies">
      <h3 className="cookies__title">Nous utilisons des cookies</h3>
      <p className="cookies__content">Nous utilisons des cookies et d'autres technologies de suivi pour améliorer
        votre expérience de navigation sur notre site, pour vous montrer un contenu personnalisé
        et des publicités ciblées, pour analyser le trafic de notre site
        et pour comprendre la provenance de nos visiteurs.
      </p>
      <div className="cookies__button">
        {/* button to close the window and TODO accept the cookies */}
        <button
          type="button"
          className="cookies__button--agree"
          onClick={() => {
            dispatch(closeCookies());
            // console.log('agree button');
          }}
        >J'accepte
        </button>
        {/* button to close the window and TODO refuse the cookies */}
        <button
          type="button"
          className="cookies__button--disagree"
          onClick={() => {
            dispatch(closeCookies());
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
