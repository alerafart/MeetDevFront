import { combineReducers } from 'redux';

import settingsReducer from './settings';
import formRegisterDev from './formRegisterDev';
import formRegisterRecruiter from './formRegisterRecruiter';
import formDevContact from './formDevContact';

const rootReducer = combineReducers({
  settings: settingsReducer,
  formRegisterDev: formRegisterDev,
  formRegisterRecruiter: formRegisterRecruiter,
  formDevContact: formDevContact,
});

export default rootReducer;
