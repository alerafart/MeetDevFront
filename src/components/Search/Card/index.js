import './title.scss';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import man from '../../../assets/images/men.png';
import woman from '../../../assets/images/woman.png';
import { setToggleModalProfil } from '../../../actions/settings';

function Title({
  avatar, firstname, lastname,
}) {
  const dispatch = useDispatch();
  return (
    <div
      className="result__champ"
      onClick={() => {
        dispatch(setToggleModalProfil());
      }}
    >
      <img
        className="result__champ--img"
        src={avatar === 'man' ? man : woman}
        alt="avatar"
      />
      <div className="result__champ--item">
        {firstname} {lastname}
      </div>
    </div>
  );
}

Title.propTypes = {
  avatar: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default Title;
