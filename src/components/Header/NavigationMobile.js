import './navigationMobile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import rocket from '../../assets/images/rocket.png';
import { burgerMenuOpen } from '../../actions/settings';

function NavigationMobile() {
  const burgerOpen = useSelector((state) => state.settings.navigation.burgerMenuOpen);
  const dispatch = useDispatch();

  const hamburgerIcon = <GiHamburgerMenu className="navigationMobile__burger" onClick={() => dispatch(burgerMenuOpen())} />;
  const closeIcon = <AiOutlineCloseCircle className="navigationMobile__burger" onClick={() => dispatch(burgerMenuOpen())} />;

  return (
    <div className="navigationMobile">
      {
        burgerOpen ? closeIcon : hamburgerIcon
      }

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
