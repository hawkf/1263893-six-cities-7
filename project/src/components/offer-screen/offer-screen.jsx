import React, {useEffect} from 'react';
import {useParams, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReviewsItem} from './reviews-item';
import PropTypes from 'prop-types';
import cardProp from '../card/card.prop';
import offerScreenProp from './offer-screen.prop';
import {transformRating, sortByDate} from '../../utils/offer';
import {nanoid} from 'nanoid';
import {Logo} from '../logo/logo';
import {NearPlaceCard} from '../card/near-place-card';
import CommentForm from '../comment-form/comment-form';
import {AppRoute} from '../../const';
import UserName from '../main-page/user-name';
import SignInOut from '../main-page/sign-in-out';
import {fetchOffer, fetchComments} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {ActionGenerator} from '../../store/action';
import CommentsList from '../comments-list.jsx/comments-list';
import {AuthorizationStatus} from '../../const';

function OfferScreen({comments,
                      openedOffer,
                      getOffer,
                      loadComments,
                      resetOpenedOffer,
                      resetComments,
                      authorizationStatus}) {

  const {id} = useParams();

  useEffect(() => {
    getOffer(id);
    loadComments(id);

    return () => {
      resetOpenedOffer();
      resetComments();
    }
  }, [id]);

  if(openedOffer === null || comments === null) {
    return (
      <LoadingScreen/>
    );
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
  } = openedOffer;

  console.log(openedOffer);
  console.log(comments);
  const ratingWidth = transformRating(rating);
  const {avatarUrl, isPro, name} = host;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserName />
                </li>
                <li className="header__nav-item">
                  <SignInOut />
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
                <CommentsList/>
                {isAuthorized && <CommentForm offerId={id}/>}
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearPlaceCard offer={openedOffer}/>
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
  openedOffer: cardProp,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  openedOffer: state.openedOffer,
  comments: state.comments,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getOffer(id) {
    dispatch(fetchOffer(id));
  },
  loadComments(id) {
    dispatch(fetchComments(id));
  },
  resetOpenedOffer() {
    dispatch(ActionGenerator.setOpenedOffer(null));
  },
  resetComments() {
    dispatch(ActionGenerator.loadComments(null));
  }
});

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);

