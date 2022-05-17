// ACTION TYPE LOGIN

export const LOGGED = 'LOGGED';

// ACTION CREATOR LOGIN
export const logged = (email, userId, devId, recruitId) => ({
  type: LOGGED,
  email,
  userId,
  devId,
  recruitId,
});

// ACTION TYPE IS_DEV

export const IS_DEV = 'IS_DEV';

// ACTION CREATOR IS_DEV
export const isDev = () => ({
  type: IS_DEV,
});

// ACTION TYPE IS_RECRUITER
export const IS_RECRUITER = 'IS_RECRUITER';

// ACTION CREATOR IS_RECRUITER
export const isRecruiter = () => ({
  type: IS_RECRUITER,
});

// ACTION TYPE LOGOUT
export const LOGOUT = 'LOGOUT';

// ACTION CREATOR logout
export const logout = () => ({
  type: LOGOUT,
});

// ACTION TYPE TOGGLE_WINDOW_LOG
export const TOGGLE_WINDOW_LOG = 'TOGGLE_WINDOW_LOG';

// ACTION CREATOR toggleWindowLog
export const toggleWindowLog = () => ({
  type: TOGGLE_WINDOW_LOG,
});

// ACTION TYPE TOGGLE_WINDOW_LOG
export const TOGGLE_MODAL_SEND_MESSAGE = 'TOGGLE_MODAL_SEND_MESSAGE';

// ACTION CREATOR toggleWindowLog
export const setToggleModalSendMessage = () => ({
  type: TOGGLE_MODAL_SEND_MESSAGE,
});

// ACTION TYPE TOGGLE_WINDOW_LOG
export const TOGGLE_MODAL_PROFIL = 'TOGGLE_MODAL_PROFIL';

// ACTION CREATOR toggleWindowLog
export const setToggleModalProfil = () => ({
  type: TOGGLE_MODAL_PROFIL,
});

// ACTION TYPE TOGGLE_WINDOW_LOG
export const FROM_SEARCH_ROUTE = 'FROM_SEARCH_ROUTE';

// ACTION CREATOR toggleWindowLog
export const setFromSearchRoute = () => ({
  type: FROM_SEARCH_ROUTE,
});

// ACTION TYPE TOGGLE_WINDOW_LOG
export const FROM_INSCRIPTION_ROUTE = 'FROM_INSCRIPTION_ROUTE';

// ACTION CREATOR toggleWindowLog
export const setFromInscriptionRoute = () => ({
  type: FROM_INSCRIPTION_ROUTE,
});

// ACTION TYPE TOGGLE_WINDOW_LOG
export const FROM_FAVORITES_ROUTE = 'FROM_FAVORITES_ROUTE';

// ACTION CREATOR toggleWindowLog
export const setFromFavoritesRoute = () => ({
  type: FROM_FAVORITES_ROUTE,
});

// ACTION TYPE TOGGLE_WINDOW_LOG
export const FROM_AWAY = 'FROM_AWAY';

// ACTION CREATOR toggleWindowLog
export const setFromAway = () => ({
  type: FROM_AWAY,
});

// ACTION TYPE TOGGLE_SEARCH_CITY_DISPLAY
export const SEARCH_CITY_DISPLAY = 'SEARCH_CITY_DISPLAY';

// ACTION CREATOR toggleWindowLog
export const searchCityDisplay = () => ({
  type: SEARCH_CITY_DISPLAY,
});

// ACTION TYPE TOGGLE_SEARCH_CITY_DISPLAY
export const SEARCH_CITY_CLOSE = 'SEARCH_CITY_CLOSE';

// ACTION CREATOR toggleWindowLog
export const searchCityClose = () => ({
  type: SEARCH_CITY_CLOSE,
});

// ACTION TYPE ADD_RESULT_SEARCH_CITY
export const ADD_RESULT_SEARCH_CITY = 'ADD_RESULT_SEARCH_CITY';

// ACTION CREATOR toggleWindowLog
export const addResultSearchCity = (result) => ({
  type: ADD_RESULT_SEARCH_CITY,
  result,
});

// ACTION TYPE ADD_RESULT_SEARCH_CITY
export const BURGER_MENU_OPEN = 'BURGER_MENU_OPEN';

// ACTION CREATOR toggleWindowLog
export const burgerMenuOpen = () => ({
  type: BURGER_MENU_OPEN,
});

// ACTION TYPE TOGGLE_SEARCH_CITY_DISPLAY
export const CHOOSE_AVATAR_MODAL = 'CHOOSE_AVATAR_MODAL';

// ACTION CREATOR toggleWindowLog
export const chooseAvatarModal = () => ({
  type: CHOOSE_AVATAR_MODAL,
});

// ACTION TYPE TOGGLE_SEARCH_CITY_DISPLAY
export const TOGGLE_MODAL_CHOOSE_TECHNOLOGIE = 'TOGGLE_MODAL_CHOOSE_TECHNOLOGIE';

// ACTION CREATOR toggleWindowLog
export const toggleModalChooseTechnologie = () => ({
  type: TOGGLE_MODAL_CHOOSE_TECHNOLOGIE,

});
