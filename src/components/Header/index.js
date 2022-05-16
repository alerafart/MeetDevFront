import './header.scss';

// import { useSelector } from 'react-redux';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import BurgerMenu from './BurgerMenu';

import { useSelector, useDispatch } from 'react-redux';
import rocket from '../../assets/images/rocket1.png';
import { logout, toggleWindowLog, setFromAway } from '../../actions/settings';


function Header() {
  const burgerMenuOpen = useSelector((state) => state.settings.navigation.burgerMenuOpen);
  return (
    <>
      { burgerMenuOpen && (
        <BurgerMenu />
      )}
      <div className="navbar">
        <NavigationDesktop />
        <NavigationMobile />
      </div>

    </>
  );
}

export default Header;
