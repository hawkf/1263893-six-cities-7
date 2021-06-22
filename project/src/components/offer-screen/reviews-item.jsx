import React from 'react';
import offerScreenProp from './offer-screen.prop';
import {humanizeCommentDate, transformRating} from '../../utils/offer';

export function ReviewsItem({commentItem}) {
  const {comment, date, rating, user} = commentItem;
  const {avatarUrl, name} = user;
  const ratingForStyle = transformRating(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingForStyle}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{humanizeCommentDate(date)}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  commentItem: offerScreenProp,
};
