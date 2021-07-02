import {AuthorizationStatus} from '../const';

export function getOffersByCity (cityName, allOffers) {
  return allOffers.filter((offer) => offer.cityName === cityName);
}

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;
