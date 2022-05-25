// ACTION TYPE LOGGED
export const LOGGED = 'LOGGED';
// ACTION CREATOR logged
export const logged = (email, userId, devId, recruitId, token) => ({
  type: LOGGED,
  email,
  userId,
  devId,
  recruitId,
  token,
});

// ACTION TYPE LOGIN_BURGER
export const LOGIN_BURGER = 'LOGIN_BURGER';
// ACTION CREATOR loginBurger
export const loginBurger = () => ({
  type: LOGIN_BURGER,
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


// ACTION TYPE TOGGLE_WINDOW_LOG_ON
export const TOGGLE_WINDOW_LOG_ON = 'TOGGLE_WINDOW_LOG_ON';

// ACTION CREATOR toggleWindowLogOn
export const toggleWindowLogOn = () => ({
  type: TOGGLE_WINDOW_LOG_ON,
});

// ACTION TYPE TOGGLE_WINDOW_LOG

// ACTION TYPE TOGGLE_MODAL_SEND_MESSAGE

export const TOGGLE_MODAL_SEND_MESSAGE = 'TOGGLE_MODAL_SEND_MESSAGE';
// ACTION CREATOR setToggleModalSendMessage
export const setToggleModalSendMessage = () => ({
  type: TOGGLE_MODAL_SEND_MESSAGE,
});

// ACTION TYPE TOGGLE_MODAL_PROFIL
export const TOGGLE_MODAL_PROFIL = 'TOGGLE_MODAL_PROFIL';
// ACTION CREATOR setToggleModalProfil
export const setToggleModalProfil = () => ({
  type: TOGGLE_MODAL_PROFIL,
});

// ACTION TYPE FROM_SEARCH_ROUTE
export const FROM_SEARCH_ROUTE = 'FROM_SEARCH_ROUTE';
// ACTION CREATOR setFromSearchRoute
export const setFromSearchRoute = () => ({
  type: FROM_SEARCH_ROUTE,
});

// ACTION TYPE FROM_INSCRIPTION_ROUTE
export const FROM_INSCRIPTION_ROUTE = 'FROM_INSCRIPTION_ROUTE';
// ACTION CREATOR setFromInscriptionRoute
export const setFromInscriptionRoute = () => ({
  type: FROM_INSCRIPTION_ROUTE,
});

// ACTION TYPE FROM_FAVORITES_ROUTE
export const FROM_FAVORITES_ROUTE = 'FROM_FAVORITES_ROUTE';
// ACTION CREATOR setFromFavoritesRoute
export const setFromFavoritesRoute = () => ({
  type: FROM_FAVORITES_ROUTE,
});

// ACTION TYPE FROM_AWAY
export const FROM_AWAY = 'FROM_AWAY';
// ACTION CREATOR setFromAway
export const setFromAway = () => ({
  type: FROM_AWAY,
});

// ACTION TYPE SEARCH_CITY_DISPLAY
export const SEARCH_CITY_DISPLAY = 'SEARCH_CITY_DISPLAY';
// ACTION CREATOR searchCityDisplay
export const searchCityDisplay = () => ({
  type: SEARCH_CITY_DISPLAY,
});

// ACTION TYPE SEARCH_CITY_CLOSE
export const SEARCH_CITY_CLOSE = 'SEARCH_CITY_CLOSE';
// ACTION CREATOR searchCityClose
export const searchCityClose = () => ({
  type: SEARCH_CITY_CLOSE,
});

// ACTION TYPE ADD_RESULT_SEARCH_CITY
export const ADD_RESULT_SEARCH_CITY = 'ADD_RESULT_SEARCH_CITY';
// ACTION CREATOR addResultSearchCity
export const addResultSearchCity = (result) => ({
  type: ADD_RESULT_SEARCH_CITY,
  result,
});

// ACTION TYPE BURGER_MENU_OPEN
export const BURGER_MENU_OPEN = 'BURGER_MENU_OPEN';
// ACTION CREATOR burgerMenuOpen
export const burgerMenuOpen = () => ({
  type: BURGER_MENU_OPEN,
});

// ACTION TYPE CHOOSE_AVATAR_MODAL
export const CHOOSE_AVATAR_MODAL = 'CHOOSE_AVATAR_MODAL';
// ACTION CREATOR chooseAvatarModal
export const chooseAvatarModal = () => ({
  type: CHOOSE_AVATAR_MODAL,
});

// ACTION TYPE TOGGLE_MODAL_CHOOSE_TECHNOLOGIE
export const TOGGLE_MODAL_CHOOSE_TECHNOLOGIE = 'TOGGLE_MODAL_CHOOSE_TECHNOLOGIE';
// ACTION CREATOR toggleModalChooseTechnologie
export const toggleModalChooseTechnologie = () => ({
  type: TOGGLE_MODAL_CHOOSE_TECHNOLOGIE,

});

// ACTION TYPE close_cookies
export const CLOSE_COOKIES = 'CLOSE_COOKIES';

// ACTION CREATOR close_cookies
export const closeCookies = () => ({
  type: CLOSE_COOKIES,
});

// ACTION TYPE loading
export const LOADING = 'LOADING';

// ACTION CREATOR loading
export const loading = () => ({
  type: LOADING,
});
