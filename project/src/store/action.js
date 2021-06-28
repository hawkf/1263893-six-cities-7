export const ActionType = {
  CHANGE_CITY: 'six-cities/changeCity',
  SET_DEFAULT_CITY_FILTER: 'six-cities/setDefaultCityFilter',
  CHANGE_ACTIVE_OFFER_ID: 'six-cities/changeActiveOfferId',
  LOAD_OFFERS: 'data/loadOffers',
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
};
