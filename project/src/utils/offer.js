import dayjs from 'dayjs';

const MAX_RATING = 5;

export function transformRating(rating) {
  const result = (Math.round(rating)*100)/MAX_RATING;
  console.log(result);
  return `${result}%`;
}

export function sortByDate(commentA, commentB) {
  return dayjs(commentB.date).diff(commentA.date);
}

export function sortPriceHighToLow(offerA, offerB) {
  return offerB.price - offerA.price;
}

export function sortPriceLowToHigh(offerA, offerB) {
  return offerA.price - offerB.price;
}

export function sortRatingTop(offerA, offerB) {
  return offerB.rating - offerA.rating;
}

export function humanizeCommentDate(date) {
  return `${dayjs(date).format('MMMM YYYY')}`;
}

export const updateOfferToClient = (offer) => {
  const updatedOffer = Object.assign(
    {},
    offer,
    {
      id: offer.id.toString(),
      cityName: offer.city.name,
      cityLocation: offer.city.location,
      isFavorite: offer['is_favorite'],
      maxAdults: offer['max_adults'],
      host: {
        avatarUrl: offer.host['avatar_url'],
        id: offer.host.id.toString(),
        isPro: offer.host['is_pro'],
        name: offer.host.name,
      },
      cardImage: offer['preview_image'],
      isPremium: offer['is_premium'],
      location: offer.location,
    },
  );

  delete updatedOffer.city;
  delete updatedOffer['is_favorite'];
  delete updatedOffer['is_premium'];
  delete updatedOffer['max_adults'];
  delete updatedOffer['avatar_url'];
  delete updatedOffer['is_pro'];
  delete updatedOffer['preview_image'];
  delete updatedOffer['is_premium'];

  return updatedOffer;
};

