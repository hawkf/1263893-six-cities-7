import {ActionGenerator} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {updateOfferToClient} from '../utils/offer';
import {updateCommentToClient} from '../utils/comment';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionGenerator.loadOffers(data.map((item) => updateOfferToClient(item)))))
);

export const fetchOffersNearBy = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(ActionGenerator.loadOffersNearBy(data.map((item) => updateOfferToClient(item)))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionGenerator.setOpenedOffer(updateOfferToClient(data))))
    .catch(() => dispatch(ActionGenerator.redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${id}`)
    .then(({data}) => dispatch(ActionGenerator.loadComments(data.map((item) => updateCommentToClient(item)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionGenerator.setUserEmail(data.email)))
    .then(() => dispatch(ActionGenerator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const postComment = (comment, offerId, onFailSendComment) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}${offerId}`, comment)
    .then(() => dispatch(ActionGenerator.sendComment(false)))
    .then(() => fetchComments(offerId))
    .catch(() => {
      onFailSendComment();
      dispatch(ActionGenerator.sendComment(false));
    })
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
