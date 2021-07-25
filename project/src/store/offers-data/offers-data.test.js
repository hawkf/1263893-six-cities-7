import {ActionType} from '../action';
import {offersData} from './offers-data';
import {SortType} from '../../const';

const DEFAULT_CITY = 'Paris';

const state = {
  city: DEFAULT_CITY,
  offers: [],
  offersNearby: null,
  openedOffer: null,
  activeOfferId: null,
  isDataLoaded: false,
  sortType: SortType.POPULAR,
};

describe('Reducer: offersData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersData(undefined, {}))
      .toEqual(state);
  });

  it('should change active offer id in state', () => {
    const changeActiveOfferIdAction = {
      type: ActionType.CHANGE_ACTIVE_OFFER_ID,
      payload: 1,
    };

    expect(offersData(state, changeActiveOfferIdAction))
      .toEqual(Object.assign(
        {},
        state,
        {activeOfferId: 1},
      ));
  });

  it('should change city in state', () => {
    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'London',
    };

    expect(offersData(state, changeCityAction))
      .toEqual(Object.assign(
        {},
        state,
        {city: 'London'},
      ));
  });

  it('should put offers to state', () => {

    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: ['offers1', 'offer2'],
    };

    expect(offersData(state, loadOffersAction))
      .toEqual(Object.assign(
        {},
        state,
        {
          offers: ['offers1', 'offer2'],
          isDataLoaded: true,
        },
      ));
  });

  it('should put offers nearby to state', () => {
    const loadOffersNearByAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: ['offers1', 'offer2'],
    };

    expect(offersData(state, loadOffersNearByAction))
      .toEqual(Object.assign(
        {},
        state,
        {
          offersNearby: ['offers1', 'offer2'],

        },
      ));
  });

  it('should set default city in state', () => {
    const setDefaultCityFilterAction = {
      type: ActionType.SET_DEFAULT_CITY_FILTER,
    };
    expect(offersData(state, setDefaultCityFilterAction))
      .toEqual(Object.assign(
        {},
        state,
        {city: DEFAULT_CITY},
      ));
  });

  it('should set opened offer in state', () => {
    const setOpenedOfferAction = {
      type: ActionType.SET_OPENED_OFFER,
      payload: {id: 1, host: 'Nike'},
    };
    expect(offersData(state, setOpenedOfferAction))
      .toEqual(Object.assign(
        {},
        state,
        {openedOffer: {id: 1, host: 'Nike'}},
      ));
  });
});
