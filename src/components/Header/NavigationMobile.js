import './navigationMobile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import rocket from '../../assets/images/rocket.png';
import { burgerMenuOpen } from '../../actions/settings';

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
    </div>
  );
}

export default NavigationMobile;
