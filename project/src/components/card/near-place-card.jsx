import React from 'react';
import {transformRating} from '../../utils/offer';
import {Link} from 'react-router-dom';
import cardProp from "./card.prop";
import PropTypes from "prop-types";

export function NearPlaceCard(props) {
  const {offer, history} = props;
  const OFFER_PAGE = '/offer/' + offer.id;
  const {cardImage, price, rating, title, type} = offer;
  const ratingStyle = transformRating(rating) + '%';

  return (
    <article onClick={() => history.push(OFFER_PAGE)} className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={OFFER_PAGE}>
          <img className="place-card__image" src={cardImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStyle}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={OFFER_PAGE}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

NearPlaceCard.propTypes = {
  offer: cardProp,
}
