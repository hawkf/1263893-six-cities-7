import React from 'react';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {getUserEmail} from '../../store/user/selectors';

function UserName() {
  const userEmail = useSelector(getUserEmail);

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

export default UserName;
