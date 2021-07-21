import React from 'react';
import {useSelector} from 'react-redux';
import Card from './card';
import {getOffersByCity} from '../../utils/common';
import {getCity, getOffers, getSortType} from '../../store/offers-data/selectors';
import {SortType} from '../../const';
import {sortPriceHighToLow, sortPriceLowToHigh, sortRatingTop} from '../../utils/offer';
import EmptyList from '../empty-list/empty-list';

function CardList() {
  const offers = useSelector(getOffers);
  const city = useSelector(getCity);
  const sortType = useSelector(getSortType);

  if (city === null) {
    return <EmptyList />;
  }

  let sortedOffers;

  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      sortedOffers = getOffersByCity(city, offers).slice().sort(sortPriceLowToHigh);
      break;
    case SortType.PRICE_HIGH_TO_LOW:
      sortedOffers = getOffersByCity(city, offers).slice().sort(sortPriceHighToLow);
      break;
    case SortType.TOP_RATED_FIRST:
      sortedOffers = getOffersByCity(city, offers).slice().sort(sortRatingTop);
      break;
    default:
      sortedOffers = getOffersByCity(city, offers);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((offer) =>
        <Card offer={offer} key={offer.id}/>)}
    </div>);
}

export default CardList;
