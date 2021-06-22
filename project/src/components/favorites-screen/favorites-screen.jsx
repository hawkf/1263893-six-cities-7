import React from 'react';
import PropTypes from 'prop-types';
import cardProp from '../card/card.prop';
import {FavoriteCard} from '../card/favorite-card';
import {Logo} from '../logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function getCityFavoriteOffers(cityName, favoriteOffers) {
  const resultFavoriteOffers = favoriteOffers.filter(((item) => item.cityName === cityName));
  return resultFavoriteOffers.map((offer) => <FavoriteCard offer={offer} key={offer.id}/>);
}

function FavoritesScreen(props) {
  const {favoriteOffers} = props;
  const cityNames = Array.from(new Set(favoriteOffers.map((item) => item.cityName)));

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cityNames.map((cityName) => (
                <li key={cityName} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{cityName}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {getCityFavoriteOffers(cityName, favoriteOffers)}
                  </div>
                </li>))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.arrayOf(
    PropTypes.oneOfType([cardProp]).isRequired,
  ),
};

export default FavoritesScreen;
