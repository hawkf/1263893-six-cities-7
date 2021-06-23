import React from 'react';
import cardProp from './card.prop';
import PropTypes from 'prop-types';
import Card from './card';

export function CardList({offers, onCardHover}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <Card onMouseOver={() => onCardHover(offer.id)} offer={offer} key={offer.id}/>)}
    </div>);
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(cardProp),
  onCardHover: PropTypes.func.isRequired,
};
