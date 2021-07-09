import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../store/api-actions';
import {Link, useHistory} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {AppRoute} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';

function SignInOut() {
  const history = useHistory();
  const onSignInHandle = () => {
    history.push(AppRoute.LOGIN);
  };

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(logout());
  };

  if (authorizationStatus  === AuthorizationStatus.NO_AUTH) {
    return (
      <span onClick={onSignInHandle} className="header__login">Sign in</span>
    );
  }
  return (
    <Link onClick={onSignOut} className="header__nav-link" to="#">
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export default SignInOut;
