import { combineReducers } from 'redux';

import settingsReducer from './settings';
import formRegisterDev from './formRegisterDev';
import formRegisterRecruiter from './formRegisterRecruiter';

import formDevContact from './formDevContact';

import formContact from './formContact';

const rootReducer = combineReducers({
  settings: settingsReducer,
  formRegisterDev: formRegisterDev,
  formRegisterRecruiter: formRegisterRecruiter,

  formDevContact: formDevContact,

  formContact: formContact,

});

export default rootReducer;
