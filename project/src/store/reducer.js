import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  openedOffer: null,
  comments: null,
  activeOfferId: null,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: null,
  isCommentFormSending: false,
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.SET_DEFAULT_CITY_FILTER:
      return {
        ...initialState,
      };
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferId: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.SET_OPENED_OFFER:
      return {
        ...state,
        openedOffer: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      }
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.SET_USER_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    case ActionType.SEND_COMMENT:
      return {
        ...state,
        isCommentFormSending: action.payload,
      }
    default:
      return state;
  }
}

export {reducer};
