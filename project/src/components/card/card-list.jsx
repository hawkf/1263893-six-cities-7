import React, {useState} from 'react';
import cardProp from './card.prop';
import PropTypes from 'prop-types';
import Card from './card';

export function CardList({offers}) {
  const [, setHoverOffer] = useState(offers[0]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <Card onMouseOver={() => setHoverOffer(offer)} offer={offer} key={offer.id}/>)}
    </div>);
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(cardProp),
};
