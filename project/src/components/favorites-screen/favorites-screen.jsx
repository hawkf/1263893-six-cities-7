import React from 'react';
import {useSelector} from 'react-redux';
import {Logo} from '../logo/logo';
import UserName from '../main-page/user-name';
import EmptyFavoriteList from './empty-favorite-list';
import FavoritesList from './favorites-list';
import SignInOut from '../main-page/sign-in-out';
import {getOffers} from '../../store/offers-data/selectors';

function FavoritesScreen() {
  const offers = useSelector(getOffers);
  const favoriteOffers = offers.filter((item) => item.isFavorite);
  const isEmptyFavoriteOffers = favoriteOffers.length === 0;


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserName />
                </li>
                <li className="header__nav-item">
                  <SignInOut />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {isEmptyFavoriteOffers && <EmptyFavoriteList />}
          {!isEmptyFavoriteOffers && <FavoritesList favoriteOffers={favoriteOffers}/>}
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

export default FavoritesScreen;
