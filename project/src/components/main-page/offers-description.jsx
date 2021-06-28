import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import carProp from '../card/card.prop';
import {getOffersByCity} from '../../utils/common';

function OffersDescription({offers, cityName}) {
  const filteredOffers = getOffersByCity(cityName, offers);
  const isSingleOffer = filteredOffers.length === 1;

  return (
    <b className="places__found">{`${filteredOffers.length}${isSingleOffer ? ' place': ' places'}`} to stay in {cityName}</b>);
}

const mapStateToProps = (state) => ({
  offers: state.offers,
  cityName: state.city,
});

OffersDescription.propTypes = {
  offers: PropTypes.arrayOf(carProp),
  cityName: PropTypes.string.isRequired,
};

export {OffersDescription};
export default connect(mapStateToProps, null)(OffersDescription);
