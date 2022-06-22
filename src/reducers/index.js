// == Import npm
import { combineReducers } from 'redux';
// == Import reducer
import settingsReducer from './settings';
import formRegisterDev from './formRegisterDev';
import formRegisterRecruiter from './formRegisterRecruiter';
import formSearchDev from './formSearchDev';
import formLogin from './formLogin';
import profilDev from './profilDev';
import profilRecruiter from './profilRecruiter';
import resultSearch from './resultSearch';
import profilDevModifyTemp from './profilDevModifyTemp';
import profilRecruiterModifyTemp from './profilRecruiterModifyTemp';
import verifyEmail from './verifyEmail';

import formDevContact from './formDevContact';

import formContact from './formContact';
import favoritesReducer from './recruiterFavoritesReducer';
import modalProfil from './modalProfil';

const rootReducer = combineReducers({
  settings: settingsReducer,
  formRegisterDev: formRegisterDev,
  formRegisterRecruiter: formRegisterRecruiter,
  formDevContact: formDevContact,
  formContact: formContact,
  formSearchDev: formSearchDev,
  formLogin: formLogin,
  profilDev: profilDev,
  profilRecruiter: profilRecruiter,
  resultSearch: resultSearch,
  favorites: favoritesReducer,
  modalProfil: modalProfil,
  profilDevModifyTemp: profilDevModifyTemp,
  profilRecruiterModifyTemp: profilRecruiterModifyTemp,
  verifyEmail: verifyEmail,
});

export default rootReducer;
