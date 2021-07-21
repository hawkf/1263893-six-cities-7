import {NameSpace} from '../root-reducer';
import get from 'lodash/get';

export const getCity = (state) => get(state, `${NameSpace.DATA}.city`, null);
export const getOffers = (state) => get(state, `${NameSpace.DATA}.offers`, []);
export const getOffersNearBy = (state) => get(state, `${NameSpace.DATA}.offersNearby`, []);
export const getOpenedOffer = (state) => get(state, `${NameSpace.DATA}.openedOffer`, null);
export const getActiveOfferId = (state) => get(state, `${NameSpace.DATA}.activeOfferId`, null);
export const getIsDataLoaded = (state) => get(state, `${NameSpace.DATA}.isDataLoaded`, false);
export const getSortType = (state) => get(state, `${NameSpace.DATA}.sortType`, null);
