import {
  ActionType,
  changeActiveOfferId,
  changeCity,
  loadOffers,
  loadOffersNearBy,
  setDefaultCityFilter,
  setOpenedOffer
} from '../action';
import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';

const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  offersNearby: null,
  openedOffer: null,
  activeOfferId: null,
  isDataLoaded: false,
}

/*const offersData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setDefaultCityFilter, (state) => {
      state.city = DEFAULT_CITY;
    })
    .addCase(changeActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOpenedOffer, (state, action) => {
      state.openedOffer = action.payload;
    })
    .addCase(loadOffersNearBy, (state, action) => {
      state.offersNearby = action.payload;
    });
});*/

function offersData (state = initialState, action) {
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
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
      };
    default:
      return state;
  }
}

export {offersData};

