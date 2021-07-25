import {
  changeCity,
  setDefaultCityFilter,
  changeActiveOfferId,
  loadOffers,
  requireAuthorization,
  outLog,
  redirectToRoute,
  setUserEmail,
  setOpenedOffer,
  loadComments,
  sendComment,
  loadOffersNearBy,
  ActionType
} from './action';
import {AuthorizationStatus} from '../const';

describe('Actions', () => {
  it('action creator for changing city returns correct action', () => {
    const city = 'Amsterdam';
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };

    expect(changeCity(city)).toEqual(expectedAction);
  });

  it('action creator for set default city filter returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_DEFAULT_CITY_FILTER,
    };

    expect(setDefaultCityFilter()).toEqual(expectedAction);
  });

  it('action creator for   changing activeOfferId, returns correct action', () => {
    const id = 1;
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_OFFER_ID,
      payload: id,
    };

    expect(changeActiveOfferId(id)).toEqual(expectedAction);
  });

  it('action creator for loading offers, returns correct action', () => {
    const offers = [1, 2];

    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for require authorization, returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual(expectedAction);
  });

  it('action creator for log out, returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(outLog()).toEqual(expectedAction);
  });

  it('action creator for redirect to route, returns correct action', () => {
    const url = '/root';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('action creator for set user email, returns correct action', () => {
    const userEmail = 'test@mail.ru';

    const expectedAction = {
      type: ActionType.SET_USER_EMAIL,
      payload: userEmail,
    };

    expect(setUserEmail(userEmail)).toEqual(expectedAction);
  });

  it('action creator for set opened offer, returns correct action', () => {
    const offer = {
      id: 1,
      city: 'Paris',
    };

    const expectedAction = {
      type: ActionType.SET_OPENED_OFFER,
      payload: offer,
    };

    expect(setOpenedOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for load comments, returns correct action', () => {
    const comments = ['test', 'test'];

    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(loadComments(comments)).toEqual(expectedAction);
  });

  it('action creator for send comment, returns correct action', () => {
    const status = true;

    const expectedAction = {
      type: ActionType.SEND_COMMENT,
      payload: status,
    };

    expect(sendComment(status)).toEqual(expectedAction);
  });

  it('action creator for loading offers nearby, returns correct action', () => {
    const offers = [1, 2];

    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    };

    expect(loadOffersNearBy(offers)).toEqual(expectedAction);
  });
});
