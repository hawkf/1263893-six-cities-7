import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NearPlaceCard} from '../card/near-place-card';
import {fetchOffersNearBy} from '../../store/api-actions';
import CardProp from '../card/card.prop';
import {getOffersNearBy, getOpenedOffer} from '../../store/offers-data/selectors';

function NearbyOffersList({offersNearby, openedOffer, loadOffersNearBy}) {
  useEffect(() => {
    loadOffersNearBy(openedOffer.id);

  }, [openedOffer]);

  if (offersNearby === null) {
    return null;
  }
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offersNearby.map((offer) => <NearPlaceCard key={offer.id} offer={offer} />)}
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  offersNearby: getOffersNearBy(state),
  openedOffer: getOpenedOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOffersNearBy(id) {
    dispatch(fetchOffersNearBy(id));
  },
});

NearbyOffersList.propTypes = {
  offersNearby: PropTypes.arrayOf(CardProp),
  openedOffer: CardProp,
  loadOffersNearBy: PropTypes.func.isRequired,
};

export {NearbyOffersList};
export default connect(mapStateToProps, mapDispatchToProps)(NearbyOffersList);
