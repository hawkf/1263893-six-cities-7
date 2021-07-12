import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../services/api'
import {ActionType} from './action';
import {checkAuth,
  logout,
  login,
  fetchOffersNearBy,
  fetchComments,
  fetchOffer,
  fetchOfferList,
  postComment} from './api-actions';
import {APIRoute, AuthorizationStatus} from '../const';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(() => {})
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {email: 'test@mail.ru'});

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_EMAIL,
          payload: 'test@mail.ru',
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });


      })
  })
})
