import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {getUserEmail} from '../../store/user/selectors';

function UserName({userEmail}) {
  if (userEmail === null) {
    return null;
  }

  return (
    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{userEmail}</span>
    </Link>
  );
}

const mapStateToProps = (state) => ({
  userEmail: getUserEmail(state),
});

UserName.propTypes = {
  userEmail: PropTypes.oneOfType(
    PropTypes.string, null,
  ),
};

export {UserName};
export default connect(mapStateToProps, null)(UserName);
