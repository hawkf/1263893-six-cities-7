import React from 'react';
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MainPage from '../main-page/main-page';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import {AppRoute} from '../../const';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import {isCheckedAuth} from '../../utils/common';
import AuthScreen from '../auth-screen/auth-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {getIsDataLoaded} from '../../store/offers-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

function App(props) {
  const {isDataLoaded, authorizationStatus} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesScreen/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen/>
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <OfferScreen {...props}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: getIsDataLoaded(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
