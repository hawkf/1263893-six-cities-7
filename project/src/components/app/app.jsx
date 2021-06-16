import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {AppRoute} from '../../const';
import FavoritesScreen from "../favorites-screen/favorites-screen";
import cardProp from '../card/card.prop';
import offerScreenProp from '../offer-screen/offer-screen.prop';

function App(props) {
  const {offers, comments} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage offers={offers}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen favoriteOffers={offers.filter((offer) => offer.isFavorite)}/>
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <OfferScreen offer={offers[0]} comments={comments}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
    offers: PropTypes.arrayOf(
    PropTypes.oneOfType([cardProp]).isRequired,
  ),
    comments: PropTypes.arrayOf(
      PropTypes.oneOfType([offerScreenProp]).isRequired,
    )
};

export default App;
