import React from 'react';
import {connect} from 'react-redux';
import cardProp from './card.prop';
import PropTypes from 'prop-types';
import Card from './card';
import {getOffersByCity} from '../../utils/common';
import {getCity, getOffers} from '../../store/offers-data/selectors';

function CardList(props) {
  const {offers, city} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {getOffersByCity(city, offers).map((offer) =>
        <Card offer={offer} key={offer.id}/>)}
    </div>);
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(cardProp),
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  city: getCity(state),
});


export {CardList};
export default connect(mapStateToProps, null)(CardList);
