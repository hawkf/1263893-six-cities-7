import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';


function PrivateRouteLogin({render, path, exact}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? <Redirect to={AppRoute.ROOT} />
          : render(routeProps)
      )}
    />
  );
}

PrivateRouteLogin.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRouteLogin;
