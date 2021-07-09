import React from 'react';
import {useSelector} from 'react-redux';
import Card from './card';
import {getOffersByCity} from '../../utils/common';
import {getCity, getOffers} from '../../store/offers-data/selectors';

function CardList() {
  const offers = useSelector(getOffers);
  const city = useSelector(getCity);

  return (
    <div className="cities__places-list places__list tabs__content">
      {getOffersByCity(city, offers).map((offer) =>
        <Card offer={offer} key={offer.id}/>)}
    </div>);
}

export default CardList;
