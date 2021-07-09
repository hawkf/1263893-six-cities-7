import React from 'react';
import {useSelector} from 'react-redux';
import {getOffersByCity} from '../../utils/common';
import {getCity, getOffers} from '../../store/offers-data/selectors';

function OffersDescription() {
  const offers = useSelector(getOffers);
  const cityName = useSelector(getCity);

  const filteredOffers = getOffersByCity(cityName, offers);
  const isSingleOffer = filteredOffers.length === 1;

  return (
    <b className="places__found">{`${filteredOffers.length}${isSingleOffer ? ' place': ' places'}`} to stay in {cityName}</b>);
}

export default OffersDescription;
