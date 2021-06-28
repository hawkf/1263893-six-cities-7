import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CardList from '../card/card-list';
import {AppRoute} from '../../const';
import {Logo} from '../logo/logo';
import Map from '../map/map';
import CitiesMenu from '../cities-menu/cities-menu';
import OffersSortForm from '../offer-sort-form/offers-sort-form';
import EmptyList from '../empty-list/empty-list';
import OffersDescription from './offers-description';
import LoadingScreen from '../loading-screen/loading-screen';
import PropTypes from 'prop-types';
import cardProp from '../card/card.prop';
import {getOffersByCity} from '../../utils/common';

function MainPage({allOffers, city, isDataLoaded}) {
  const offers = getOffersByCity(city, allOffers);
  const isOffersEmpty = offers.length === 0;

  return (
    <div className="page page--gray page--main">
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

      <main className={`page__main page__main--index ${isOffersEmpty ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesMenu/>
        <div className="cities">
          {!isDataLoaded && <LoadingScreen/>}
          {isOffersEmpty && isDataLoaded && <EmptyList/>}
          {!isOffersEmpty && isDataLoaded &&
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <OffersDescription/>
              <OffersSortForm/>
              <CardList/>
            </section>
            <Map/>
          </div>}
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  allOffers: PropTypes.arrayOf(cardProp),
  city: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  allOffers: state.offers,
  city: state.city,
  isDataLoaded: state.isDataLoaded,
});

export {MainPage};
export default connect(mapStateToProps, null)(MainPage);
