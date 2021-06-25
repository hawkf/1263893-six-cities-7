import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import carProp from '../card/card.prop';

function OffersDescription({offers, cityName}) {
  const isSingleOffer = offers.length === 1;

  return (
    <b className="places__found">{`${offers.length}${isSingleOffer ? ' place': ' places'}`} to stay in {cityName}</b>);
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
