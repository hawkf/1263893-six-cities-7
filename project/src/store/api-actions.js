import {
  loadComments,
  loadOffers,
  loadOffersNearBy,
  redirectToRoute,
  requireAuthorization,
  sendComment,
  setOpenedOffer,
  setUserEmail,
  outLog
} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {updateOfferToClient} from '../utils/offer';
import {updateCommentToClient} from '../utils/comment';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map((item) => updateOfferToClient(item)))))
);

export const fetchOffersNearBy = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(loadOffersNearBy(data.map((item) => updateOfferToClient(item)))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(setOpenedOffer(updateOfferToClient(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${id}`)
    .then(({data}) => dispatch(loadComments(data.map((item) => updateCommentToClient(item)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUserEmail(data.email)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const postComment = (comment, offerId, onFailSendComment) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}${offerId}`, comment)
    .then(() => dispatch(sendComment(false)))
    .then(() => fetchComments(offerId))
    .catch(() => {
      onFailSendComment();
      dispatch(sendComment(false));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(setUserEmail(email)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(outLog()))
    .then(() => dispatch(setUserEmail(null)))
);
