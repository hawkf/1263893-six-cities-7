import {ActionGenerator} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {updateOfferToClient} from '../utils/offer';


export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionGenerator.loadOffers(data.map((item) => updateOfferToClient(item)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionGenerator.setUserEmail(data.email)))
    .then(() => dispatch(ActionGenerator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionGenerator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionGenerator.setUserEmail(email)))
    .then(() => dispatch(ActionGenerator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionGenerator.logout()))
    .then(() => dispatch(ActionGenerator.setUserEmail(null)))
);
