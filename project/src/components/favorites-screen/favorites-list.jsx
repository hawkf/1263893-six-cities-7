import React from 'react';
import PropTypes from 'prop-types';
import {FavoriteCard} from '../card/favorite-card';
import CardProp from '../card/card.prop';
import {Link} from 'react-router-dom';

function getCityFavoriteOffers(cityName, favoriteOffers) {
  const resultFavoriteOffers = favoriteOffers.filter(((item) => item.cityName === cityName));
  return resultFavoriteOffers.map((offer) => <FavoriteCard offer={offer} key={offer.id}/>);
}

function FavoritesList({favoriteOffers}) {

  const cityNames = Array.from(new Set(favoriteOffers.map((item) => item.cityName)));

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cityNames.map((cityName) => (
          <li key={cityName} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="#">
                  <span>{cityName}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {getCityFavoriteOffers(cityName, favoriteOffers)}
            </div>
          </li>))}
      </ul>
    </section>
  );
}

FavoritesList.propTypes = {
  favoriteOffers: PropTypes.arrayOf(CardProp),
};

export default FavoritesList;
