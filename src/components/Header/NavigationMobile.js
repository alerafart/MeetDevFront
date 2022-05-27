// == Import npm
import { useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
// == Import action-creator
import { burgerMenuOpen } from '../../actions/settings';
// == Import img
import rocket from '../../assets/images/rocket.png';
// == Import style
import './navigationMobile.scss';
// == Composant
function NavigationMobile() {
  const dispatch = useDispatch();

  return (
    <div className="navigationMobile">
      <GiHamburgerMenu className="navigationMobile__burger" onClick={() => dispatch(burgerMenuOpen())} />

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
