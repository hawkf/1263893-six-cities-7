import React from 'react';
import {BrowserRouter, Route, Switch, useParams} from 'react-router-dom';
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
        <Route exact path={AppRoute.ROOT} render={(props) => <MainPage offers={offers} {...props}/>}/>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen favoriteOffers={offers.filter((offer) => offer.isFavorite)}/>
        </Route>
        <Route exact path={AppRoute.OFFER} render={(props)=> <OfferScreen offers={offers} comments={comments} {...props}/>}/>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
    offers: PropTypes.arrayOf(
    cardProp,
  ),
    comments: PropTypes.arrayOf(
      offerScreenProp,
    )
};

export default App;
