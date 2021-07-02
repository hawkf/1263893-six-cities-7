import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../store/api-actions';
import {Link, useHistory} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {AppRoute} from '../../const';

function SignInOut({authorizationStatus, onSignOut}) {
  const history = useHistory();
  const onSignInHandle = () => {
    history.push(AppRoute.LOGIN);
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

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSignOut() {
    dispatch(logout());
  },
});

SignInOut.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export {SignInOut};
export default connect(mapStateToProps, mapDispatchToProps)(SignInOut);
