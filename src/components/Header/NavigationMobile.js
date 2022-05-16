import './navigationMobile.scss';
import { useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import rocket from '../../assets/images/rocket.png';
import { burgerMenuOpen } from '../../actions/settings';

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
