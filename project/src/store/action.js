import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'six-cities/changeCity',
  SET_DEFAULT_CITY_FILTER: 'six-cities/setDefaultCityFilter',
  CHANGE_ACTIVE_OFFER_ID: 'six-cities/changeActiveOfferId',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'six-cities/redirectToRoute',
  SET_USER_EMAIL: 'six-cities/setUserEmail',
  SET_OPENED_OFFER: 'data/setOpenedOffer',
  LOAD_COMMENTS: 'data/loadComments',
  SEND_COMMENT: 'data/sendComment',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearBy',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (cityName) => ({
  payload: cityName,
}));

export const setDefaultCityFilter = createAction(ActionType.SET_DEFAULT_CITY_FILTER);

export const changeActiveOfferId = createAction(ActionType.CHANGE_ACTIVE_OFFER_ID, (offerId) => ({
  payload: offerId,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const outLog = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const setUserEmail = createAction(ActionType.SET_USER_EMAIL, (email) => ({
  payload: email,
}));

export const setOpenedOffer = createAction(ActionType.SET_OPENED_OFFER, (offer) => ({
  payload: offer,
}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

export const sendComment = createAction(ActionType.SEND_COMMENT, (status) => ({
  payload: status,
}));

export const loadOffersNearBy = createAction(ActionType.LOAD_OFFERS_NEARBY, (offersNearBy) => ({
  payload: offersNearBy,
}));
