import React from 'react';
import cardProp from './card.prop';
import {transformRating} from '../../utils/offer';
import {Link, useHistory} from 'react-router-dom';

export function FavoriteCard({offer}) {
  const history = useHistory();
  const {cardImage, price, rating, title, type} = offer;
  const OFFER_PAGE = `/offer/${offer.id}`;
  const ratingWidth = transformRating(rating);

  function onClickHandle() {
    history.push(OFFER_PAGE);
  }

  return (
    <article onClick={onClickHandle} className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={OFFER_PAGE}>
          <img className="place-card__image" src={cardImage} width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={OFFER_PAGE}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

FavoriteCard.propTypes = {
  offer: cardProp,
};
