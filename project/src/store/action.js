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
};

export const ActionGenerator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  setDefaultCityFilter: () => ({
    type: ActionType.SET_DEFAULT_CITY_FILTER,
  }),
  changeActiveOfferId: (offerId) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: offerId,
  }),
  loadOffers: (offers) => ({
    type:ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setUserEmail: (email) => ({
    type: ActionType.SET_USER_EMAIL,
    payload: email,
  }),
  setOpenedOffer: (offer) => ({
    type: ActionType.SET_OPENED_OFFER,
    payload: offer,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  sendComment: (status) => ({
    type: ActionType.SEND_COMMENT,
    payload: status,
  }),
};
