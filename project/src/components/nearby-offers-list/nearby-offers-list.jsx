import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NearPlaceCard} from '../card/near-place-card';
import {fetchOffersNearBy} from '../../store/api-actions';
import {getOffersNearBy, getOpenedOffer} from '../../store/offers-data/selectors';

function NearbyOffersList() {
  const offersNearby = useSelector(getOffersNearBy);
  const openedOffer = useSelector(getOpenedOffer);

  const dispatch = useDispatch();

  const loadOffersNearBy = (id) => {
    dispatch(fetchOffersNearBy(id));
  };

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

export default NearbyOffersList;
