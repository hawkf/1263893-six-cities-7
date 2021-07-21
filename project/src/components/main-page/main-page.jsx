import React from 'react';
import {useSelector} from 'react-redux';
import CardList from '../card/card-list';
import {Logo} from '../logo/logo';
import Map from '../map/map';
import CitiesMenu from '../cities-menu/cities-menu';
import OffersSortForm from '../offer-sort-form/offers-sort-form';
import EmptyList from '../empty-list/empty-list';
import OffersDescription from './offers-description';
import {getOffersByCity} from '../../utils/common';
import SignInOut from './sign-in-out';
import UserName from './user-name';
import {getCity, getOffers} from '../../store/offers-data/selectors';

function MainPage() {
  const allOffers = useSelector(getOffers);
  const city = useSelector(getCity);

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
                  <UserName/>
                </li>
                <li className="header__nav-item">
                  <SignInOut/>
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
          {isOffersEmpty ? <EmptyList/> : (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <OffersDescription/>
                <OffersSortForm/>
                <CardList/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers}/>
                </section>
              </div>
            </div>)}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
