import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.DATA].city;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffersNearBy = (state) => state[NameSpace.DATA].offersNearby;
export const getOpenedOffer = (state) => state[NameSpace.DATA].openedOffer;
export const getActiveOfferId = (state) => state[NameSpace.DATA].activeOfferId;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
