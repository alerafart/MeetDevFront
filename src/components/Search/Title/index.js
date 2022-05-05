import './title.scss';
import PropTypes from 'prop-types';

import man from '../../../assets/images/men.png';
import woman from '../../../assets/images/woman.png';

function Title({ avatar, firstname, lastname }) {
  // console.log(man);
  // let image;
  // if (avatar === 'man') {
  //   image = "man";
  // }
  // else {
  //   image = woman;
  // }
  return (
    <div className="result__champ">
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
