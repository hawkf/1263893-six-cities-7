import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../services/api';
import {ActionType} from './action';
import {
  checkAuth,
  fetchOffersNearBy,
  fetchComments,
  fetchOfferList
} from './api-actions';
import {APIRoute, AuthorizationStatus} from '../const';
import {updateOfferToClient} from '../utils/offer';
import {updateCommentToClient} from '../utils/comment';

let api = null;
const offers = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatar_url': 'img/1.png',
      'id': 3,
      'is_pro': true,
      'name': 'Angelina',
    },
    'id': 1,
    'images': ['img/1.png', 'img/2.png'],
    'is_favorite': false,
    'is_premium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'max_adults': 4,
    'preview_image': 'img/1.png',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatar_url': 'img/1.png',
      'id': 3,
      'is_pro': true,
      'name': 'Angelina',
    },
    'id': 2,
    'images': ['img/1.png', 'img/2.png'],
    'is_favorite': false,
    'is_premium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'max_adults': 4,
    'preview_image': 'img/1.png',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  }];

const comments = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatar_url': 'img/1.png',
      'id': 4,
      'is_pro': false,
      'name': 'Max',
    },
  },
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 2,
    'rating': 4,
    'user': {
      'avatar_url': 'img/1.png',
      'id': 4,
      'is_pro': false,
      'name': 'Max',
    },
  }];

describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(() => {
    });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {email: 'test@mail.ru'});

    return checkAuthLoader(dispatch, () => {
    }, api)
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


      });
  });

  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOfferList();


    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, offers);

    return offersLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: offers.map((offer) => updateOfferToClient(offer)),
        });
      });
  });
  it('should make a correct API call to GET /offers/:offerId/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 2;
    const offersNearbyLoader = fetchOffersNearBy(id);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}/nearby`)
      .reply(200, offers);

    return offersNearbyLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: offers.map((offer) => updateOfferToClient(offer)),
        });
      });
  });

  it('should make a correct API call to GET /comments/:offerId', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 2;
    const commentsLoader = fetchComments(id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}${id}`)
      .reply(200, comments);

    return commentsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: comments.map((comment) => updateCommentToClient(comment)),
        });
      });
  });
});
