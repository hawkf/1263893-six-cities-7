import {ActionType, requireAuthorization} from '../action';
import {user} from './user';
import {AuthorizationStatus} from '../../const';

const state = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: null,
};

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({authorizationStatus: AuthorizationStatus.UNKNOWN, userEmail: null});
  });

  it('should change authorization status in state', () => {
    const requireAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    }

    expect(user(state, requireAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, userEmail: null});
  });

  it('should set authorization log out status in state', () => {
    const logOutAction = {
      type: ActionType.LOGOUT,
    }

    expect(user(state, logOutAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, userEmail: null});
  });

  it('should set user email in state', () => {
    const setUserEmailAction = {
      type: ActionType.SET_USER_EMAIL,
      payload: 'test@mail.ru',
    }

    expect(user(state, setUserEmailAction))
      .toEqual({authorizationStatus: AuthorizationStatus.UNKNOWN, userEmail: 'test@mail.ru'});
  });
});
