export function getOffersByCity (cityName, allOffers) {
  return allOffers.filter((offer) => offer.cityName === cityName);
}
