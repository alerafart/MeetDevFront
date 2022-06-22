// == Import action
import {
  FROM_AWAY,
  FROM_FAVORITES_ROUTE,
  FROM_INSCRIPTION_ROUTE,
  FROM_SEARCH_ROUTE,
  IS_DEV,
  IS_RECRUITER,
  LOGGED,
  LOGOUT,
  TOGGLE_MODAL_PROFIL,
  TOGGLE_MODAL_SEND_MESSAGE,
  SEARCH_CITY_DISPLAY,
  TOGGLE_WINDOW_LOG,
  ADD_RESULT_SEARCH_CITY,

  BURGER_MENU_OPEN,

  SEARCH_CITY_CLOSE,
  CHOOSE_AVATAR_MODAL,
  TOGGLE_MODAL_CHOOSE_TECHNOLOGIE,
  LOGIN_BURGER,
  TOGGLE_WINDOW_LOG_ON,
  CLOSE_COOKIES,
  LOADING,
  TOGGLE_DARK_MODE,
  MESSAGE_CONTENT,
  DISPLAY_MESSAGE,
  HIDE_MESSAGE,

} from '../actions/settings';

export const initialState = {
  log: {
    logged: false,
    isDev: false,
    isRecruiter: false,
    email: '',
    token: '',
    windowLog: false,
    user_id: '',
    dev_id: '',
    recruit_id: '',
    cookiesLoad: true,
    cookiesInLocalStorage: false,
  },
  navigation: {
    windowSendMessage: false, // open Modal Send Message
    windowProfil: false,
    fromSearchRoute: false,
    fromFavoritesRoute: false,
    frominscriptionRoute: false,
    chooseAvatarModal: false,
    chooseTechnologieModal: false,
    displaySearchCity: false,
    resultSearchCity: [],
    burgerMenuOpen: false,
    burgerLogin: false,
    loading: false,
    darkMode: true,
    displayMessage: false,
    contentMessage: '',
    validateMessage: false,
  },
};

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_MESSAGE: {
      return {
        ...state,
        navigation: {
          ...state.navigation,
          displayMessage: true,
        },
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        navigation: {
          ...state.navigation,
          displayMessage: false,
        },
      };
    }
    case MESSAGE_CONTENT: {
      return {
        ...state,
        navigation: {
          ...state.navigation,
          contentMessage: action.content,
          validateMessage: action.validate,
        },
      };
    }
    case TOGGLE_DARK_MODE: {
      return {
        ...state,
        navigation: {
          ...state.navigation,
          darkMode: !state.navigation.darkMode,
        },
      };
    }
    case LOADING:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          loading: !state.navigation.loading,
        },
      };
    case BURGER_MENU_OPEN:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          burgerMenuOpen: !state.navigation.burgerMenuOpen,
          burgerLogin: false,
        },
      };
    case LOGIN_BURGER:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          burgerLogin: !state.navigation.burgerLogin,
        },
      };
    case TOGGLE_MODAL_CHOOSE_TECHNOLOGIE:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          chooseTechnologieModal: !state.navigation.chooseTechnologieModal,
        },
      };
    case CHOOSE_AVATAR_MODAL:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          chooseAvatarModal: !state.navigation.chooseAvatarModal,
        },
      };
    case SEARCH_CITY_DISPLAY:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          displaySearchCity: true,
        },
      };
    case SEARCH_CITY_CLOSE:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          displaySearchCity: false,
        },
      };
    case ADD_RESULT_SEARCH_CITY:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          resultSearchCity: action.result,
        },
      };
    case TOGGLE_WINDOW_LOG:
      return {
        ...state,
        log: {
          ...state.log,
          windowLog: !state.log.windowLog,
        },
      };
    case TOGGLE_WINDOW_LOG_ON:
      return {
        ...state,
        log: {
          ...state.log,
          windowLog: true,
        },
      };
    case LOGGED:
      return {
        ...state,
        log: {
          ...state.log,
          logged: true,
          email: action.email,
          user_id: action.userId,
          dev_id: action.devId,
          recruit_id: action.recruitId,
          token: action.token,
        },
      };
    case LOGOUT:
      return {
        ...state,
        log: {
          ...state.log,
          logged: false,
          isDev: false,
          isRecruiter: false,
          email: '',
          token: '',
          windowLog: false,
          user_id: '',
          dev_id: '',
          recruit_id: '',
        },
        navigation: {
          ...state.navigation,
          windowSendMessage: false, // open Modal Send Message
          windowProfil: false,
          fromSearchRoute: false,
          fromFavoritesRoute: false,
          frominscriptionRoute: false,
          chooseAvatarModal: false,
          chooseTechnologieModal: false,
          displaySearchCity: false,
          resultSearchCity: [],
          burgerMenuOpen: false,
          loading: false,
        },
      };
    case IS_DEV:
      return {
        ...state,
        log: {
          ...state.log,
          isDev: true,
          isRecruiter: false,
        },
      };

    case IS_RECRUITER:
      return {
        ...state,
        log: {
          ...state.log,
          isDev: false,
          isRecruiter: true,
        },
      };
    case TOGGLE_MODAL_SEND_MESSAGE:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          windowSendMessage: !state.navigation.windowSendMessage,
        },
      };
    case TOGGLE_MODAL_PROFIL:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          windowProfil: !state.navigation.windowProfil,
        },
      };
    case FROM_SEARCH_ROUTE:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          fromSearchRoute: true,
          fromFavoritesRoute: false,
          frominscriptionRoute: false,
        },
      };
    case FROM_INSCRIPTION_ROUTE:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          fromSearchRoute: false,
          fromFavoritesRoute: false,
          frominscriptionRoute: true,
        },
      };
    case FROM_FAVORITES_ROUTE:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          fromSearchRoute: false,
          fromFavoritesRoute: true,
          frominscriptionRoute: false,
        },
      };
    case FROM_AWAY:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          fromSearchRoute: false,
          fromFavoritesRoute: false,
          frominscriptionRoute: false,
        },
      };
    case CLOSE_COOKIES:
      return {
        ...state,
        log: {
          ...state.log,
          cookiesLoad: false,
        },
      };
    default:
      return state;
  }
};

export default settings;
