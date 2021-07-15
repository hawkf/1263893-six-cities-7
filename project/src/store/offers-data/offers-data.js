import {
  changeActiveOfferId,
  changeCity,
  loadOffers,
  loadOffersNearBy,
  setDefaultCityFilter,
  setOpenedOffer,
  changeFavoritesState, setSortType
} from '../action';
import {createReducer} from '@reduxjs/toolkit';
import {findOffer} from '../../utils/common';
import {SortType} from '../../const';

const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  sortType: SortType.POPULAR,
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
    })
    .addCase(changeFavoritesState, (state, action) => {
      state.offers[findOffer(state.offers, action.payload.id)] = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export {offersData};

