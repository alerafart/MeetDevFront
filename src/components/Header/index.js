import './header.scss';
import { useSelector } from 'react-redux';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import BurgerMenu from './BurgerMenu';

function Header() {
  const burgerMenuOpen = useSelector((state) => state.settings.navigation.burgerMenuOpen);
  return (
    <div className="navbar">
      <NavigationDesktop />
      <NavigationMobile />
      { burgerMenuOpen && (
        <BurgerMenu />
      )}
    </div>
  );
}

export default Header;
