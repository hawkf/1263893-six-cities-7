import React from 'react';
import {connect} from 'react-redux';
import cardProp from './card.prop';
import PropTypes from 'prop-types';
import Card from './card';

function CardList(props) {
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <Card offer={offer} key={offer.id}/>)}
    </div>);
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(cardProp),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});


export {CardList};
export default connect(mapStateToProps, null)(CardList);
