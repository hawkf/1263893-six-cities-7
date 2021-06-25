export const ActionType = {
  CHANGE_CITY: 'six-cities/changeCity',
  SET_DEFAULT_CITY_FILTER: 'six-cities/setDefaultCityFilter',
  CHANGE_ACTIVE_OFFER_ID: 'six-cities/changeActiveOfferId',
};

export const ActionGenerator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    cityName: cityName,
  }),
  setDefaultCityFilter: () => ({
    type: ActionType.SET_DEFAULT_CITY_FILTER,
  }),
  changeActiveOfferId: (offerId) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    activeOfferId: offerId,
  }),
};
