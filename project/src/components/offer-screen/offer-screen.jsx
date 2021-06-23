import React from 'react';
import {Link, useParams, Redirect} from 'react-router-dom';
import {ReviewsItem} from './reviews-item';
import PropTypes from 'prop-types';
import cardProp from '../card/card.prop';
import offerScreenProp from './offer-screen.prop';
import {transformRating, sortByDate} from '../../utils/offer';
import {nanoid} from 'nanoid';
import {Logo} from '../logo/logo';
import {NearPlaceCard} from '../card/near-place-card';
import {CommentForm} from '../comment-form/comment-form';
import {AppRoute} from '../../const';

function OfferScreen({offers, comments}) {
  const {id} = useParams();
  const offer = offers.find((item) => item.id === id);
  if(offer === undefined) {
    return (<Redirect to={AppRoute.PAGE_NOT_FOUND}/>);
  }
  const {
    images,
    description,
    bedrooms,
    maxAdults,
    goods,
    host,
    price,
    rating,
    title,
    type,
    isPremium,
  } = offer;
  const ratingWidth = transformRating(rating);
  const {avatarUrl, isPro, name} = host;
  const resultComments = comments.sort(sortByDate);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div key={nanoid()} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>)}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingWidth}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms === 1 ? `${bedrooms} Bedroom` : `${bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults === 1 ? `${maxAdults} adult` : `${maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={nanoid()} className="property__inside-item">
                      {good}
                    </li>))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={isPro ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' : 'property__avatar-wrapper user__avatar-wrapper'}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  <span className="property__user-status">
                    {isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ul className="reviews__list">
                  {resultComments.map((comment) => (
                    <ReviewsItem commentItem={comment} key={comment.id}/>))}
                </ul>
                <CommentForm/>
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearPlaceCard offer={offers[0]}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

OfferScreen.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.oneOfType([offerScreenProp]),
  ),
  offers: PropTypes.arrayOf(
    cardProp,
  ),
};

export default OfferScreen;
