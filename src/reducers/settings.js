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
  TOGGLE_WINDOW_LOG,
} from '../actions/settings';

export const initialState = {
  log: {
    logged: false,
    isDev: false,
    isRecruiter: false,
    email: '',
    token: '',
    windowLog: false,
  },
  navigation: {
    windowSendMessage: false,
    windowProfil: false,
    fromSearchRoute: false,
    fromFavoritesRoute: false,
    frominscriptionRoute: false,
  },
};

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_WINDOW_LOG:
      return {
        ...state,
        log: {
          ...state.log,
          windowLog: !state.log.windowLog,
        },
      };
    case LOGGED:
      return {
        ...state,
        log: {
          ...state.log,
          logged: true,
          email: action.email,

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
    default:
      return state;
  }
};

export default settings;
