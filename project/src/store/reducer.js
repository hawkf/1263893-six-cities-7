import {offers} from '../mocks/offers';
import {ActionType} from './action';

const DEFAULT_CITY = 'Paris';


function getOffersByCity (cityName, allOffers) {
  return allOffers.filter((offer) => offer.cityName === cityName);
}
const initialState = {
  city: DEFAULT_CITY,
  offers:  getOffersByCity (DEFAULT_CITY, offers),
  activeOfferId: null,
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.cityName,
        offers: getOffersByCity(action.cityName, offers),
      };
    case ActionType.SET_DEFAULT_CITY_FILTER:
      return {
        ...initialState,
      };
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferId: action.activeOfferId,
      };
    default:
      return state;
  }
}

export {reducer};
