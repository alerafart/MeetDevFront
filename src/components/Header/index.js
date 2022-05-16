import './header.scss';
import { useSelector } from 'react-redux';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import BurgerMenu from './BurgerMenu';

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
