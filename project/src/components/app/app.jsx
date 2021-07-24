import React from 'react';
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import MainPage from '../main-page/main-page';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import {AppRoute} from '../../const';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import {isCheckedAuth} from '../../utils/common';
import AuthScreen from '../auth-screen/auth-screen';
import PrivateRouteFavorites from '../private-route-favorites/private-route-favorites';
import browserHistory from '../../browser-history';
import {getIsDataLoaded} from '../../store/offers-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import PrivateRouteLogin from '../private-route-login/private-route-login';

function App(props) {

  const isDataLoaded = useSelector(getIsDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);


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
        <PrivateRouteLogin
          exact
          path={AppRoute.LOGIN}
          render={() => <AuthScreen/>}
        >
        </PrivateRouteLogin>
        <PrivateRouteFavorites
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesScreen/>}
        >
        </PrivateRouteFavorites>
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

export default App;
