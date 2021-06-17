import React from 'react';
import PropTypes from 'prop-types';
import cardProp from './card.prop';
import {transformRating} from '../../utils/offer';

export function FavoriteCard(props) {
  const {offer} = props;
  const {cardImage, price, rating, title, type} = offer;
  const transformedRating = transformRating(rating) + '%';

  return (<article className="favorites__card place-card">
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={cardImage} width="150" height="110"
             alt="Place image"/>
      </a>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button place-card__bookmark-button--active button"
                type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: transformedRating}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>)
}

FavoriteCard.propTypes = {
  offer: cardProp,
}
