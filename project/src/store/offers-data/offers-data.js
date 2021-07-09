import {
  changeActiveOfferId,
  changeCity,
  loadOffers,
  loadOffersNearBy,
  setDefaultCityFilter,
  setOpenedOffer
} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  offersNearby: null,
  openedOffer: null,
  activeOfferId: null,
  isDataLoaded: false,
};

const offersData = createReducer(initialState, (builder) => {
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
      state.isDataLoaded = true;
    })
    .addCase(setOpenedOffer, (state, action) => {
      state.openedOffer = action.payload;
    })
    .addCase(loadOffersNearBy, (state, action) => {
      state.offersNearby = action.payload;
    });
});

export {offersData};

