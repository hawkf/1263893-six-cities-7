import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import {Logo} from '../logo/logo';
import SignInOut from '../main-page/sign-in-out';
import {Link} from 'react-router-dom';

function AuthScreen() {
  const MIN_PASSWORD_LENGTH = 1;
  const [password, setPassword] = useState('');

  const loginRef = useRef();

  let isFormReadyToSend = String(password).trim().length >= MIN_PASSWORD_LENGTH;

  const onChangePasswordHandle = (evt) => {
    setPassword(evt.target.value);
  }

  const dispatch = useDispatch();

  const onSubmit = (authData) => {
    dispatch(login(authData));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: password,
    });
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <SignInOut />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input value={password} onChange={onChangePasswordHandle} className="login__input form__input" type="password" name="password" placeholder="Password" required=""/>
              </div>
              <button className="login__submit form__submit button" type="submit" disabled={!isFormReadyToSend}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AuthScreen;

