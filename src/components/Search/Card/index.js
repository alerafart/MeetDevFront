import './title.scss';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import man from '../../../assets/images/men.png';
import woman from '../../../assets/images/woman.png';
import { setToggleModalProfil } from '../../../actions/settings';
import { fetchProfileModale } from '../../../actions/formSearchDev';

function Title({
  user,
}) {
  const dispatch = useDispatch();
  return (
    <div
      className="result__champ"
      onClick={() => {
        dispatch(fetchProfileModale(user));
        dispatch(setToggleModalProfil());
      }}
    >
      <img
        className="result__champ--img"
        src={user.profile_picture === 'man' ? man : woman}
        alt="avatar"
      />
      <div className="result__champ--item">
        {user.firstname} {user.lastname}
      </div>
    </div>
  );
}

Title.propTypes = {
/*   user : PropTypes.arrayOf{
  profile_picture: PropTypes.string.isRequired;
  firstname: PropTypes.string.isRequired;
  lastname: PropTypes.string.isRequired;
  } */

};

export default Title;
