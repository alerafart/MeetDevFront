import './navigationMobile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import rocket from '../../assets/images/rocket.png';
import { burgerMenuOpen, toggleDarkMode } from '../../actions/settings';
function NavigationMobile() {
  const isDarkMode = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch();

  return (
    <div className={isDarkMode ? 'navigationMobile dark' : 'navigationMobile'}>
      <GiHamburgerMenu className={isDarkMode ? 'navigationMobile__burger dark' : 'navigationMobile__burger'} onClick={() => dispatch(burgerMenuOpen())} />

      <div className="navigationMobile__header">
        <img
          className="navigationMobile__header--img"
          src={rocket}
          alt="logo fusée"
        />
        <div className="navigationMobile__header--title">
          Meet Dev
        </div>
      </div>
      {
            isDarkMode && (
              <div
                className="navigationMobile__header__dark"
                onClick={() => {
                  dispatch(toggleDarkMode());
                }}
              >
                <MdDarkMode className={isDarkMode ? 'navigationMobile__header__dark__darkMod dark' : 'navigationMobile__header__dark__darkMod'} />
              </div>
            )
          }
      {
            !isDarkMode && (
              <div
                className="navigationMobile__header__dark"
                onClick={() => {
                  dispatch(toggleDarkMode());
                }}
              >
                <MdOutlineDarkMode className={isDarkMode ? 'navigationMobile__header__dark__darkMod dark' : 'navigationMobile__header__dark__darkMod'} />

              </div>
            )
          }
    </div>
  );
}

export default NavigationMobile;
