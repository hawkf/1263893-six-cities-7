import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {changeActiveOfferId} from '../../store/action';
import CardMark from './card-mark';
import cardProp from './card.prop';
import {transformRating} from '../../utils/offer';
import BookMarkButton from '../bookmark-button/bookmark-button';

function Card({offer}) {
  const history = useHistory();
  const OFFER_PAGE = `/offer/${offer.id}`;
  const {cardImage, price, rating, title, type, isPremium} = offer;
  const ratingWidth = transformRating(rating);

  const dispatch = useDispatch();

  const onMouseAction = (offerId) => {
    dispatch(changeActiveOfferId(offerId));
  };

  function onMouseOverHandle() {
    onMouseAction(offer.id);
  }

  function onMouseOutHandle() {
    onMouseAction(null);
  }

  function onClickHandle() {
    history.push(OFFER_PAGE);
  }

  return (
    <article onMouseOver={onMouseOverHandle} onMouseOut={onMouseOutHandle} className="cities__place-card place-card">
      <CardMark isPremium={isPremium}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={OFFER_PAGE}>
          <img className="place-card__image" src={cardImage} width="260" height="200" alt="Offer"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookMarkButton className={'place-card__bookmark-button'} offer={offer}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </BookMarkButton>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 onClick={onClickHandle} className="place-card__name">
          <Link to={OFFER_PAGE}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: cardProp,
};

export default Card;
