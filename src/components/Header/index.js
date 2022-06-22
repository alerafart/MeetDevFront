// == Import npm
// import { useSelector } from 'react-redux';
// == Import component
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
// import BurgerMenu from './BurgerMenu';
// == Import style
import './header.scss';
// == Component
function Header() {
  // function to select the state settings to transfer in the component BurgerMenu
  // const burgerMenuOpen = useSelector((state) => state.settings.navigation.burgerMenuOpen);
  return (
    <div className="navbar">
      <NavigationDesktop />
      <NavigationMobile />
    </div>
  );
}

export default Header;
