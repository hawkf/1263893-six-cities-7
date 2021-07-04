import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {postComment} from '../../store/api-actions';
import {APIRoute} from '../../const';
import {ActionGenerator} from '../../store/action';
import RatingInput from './rating-input';
import {fetchComments} from '../../store/api-actions';


function CommentForm({sendFormData, offerId, isCommentFormSending}) {
  const [rating, setRating] = useState(null);
  const [text, setText] = useState('');

  const MIN_TEXT_LENGTH = 50;
  const MAX_TEXT_LENGTH = 300;
  const MAX_RATING = 5;

  useEffect(() =>{
    if(isCommentFormSending === false) {
      setRating(null);
      setText('');
    }
  }, [isCommentFormSending])


  function onRatingChangeHandle(value) {
    setRating(value);
  }

  function handleTextChange(evt) {
    setText(evt.target.value);
  }

  const isFormReadyToSend = !isCommentFormSending &&
    rating != null &&
    text.length >= MIN_TEXT_LENGTH &&
    text.length <= MAX_TEXT_LENGTH;

  function handleSubmit(evt) {
    evt.preventDefault();
    sendFormData({comment: text, rating: rating}, offerId);
    console.log(`${APIRoute.COMMENTS}${offerId}`);
  }

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[...Array(MAX_RATING)].map((item, index) => <RatingInput isCommentFormSending={isCommentFormSending} value={index + 1} onRatingChangeHandle={onRatingChangeHandle} key={index + 1}/>)}
      </div>
      <textarea value={text} onChange={handleTextChange} disabled={isCommentFormSending ? true : ''} className="reviews__textarea form__textarea" id="review"  name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormReadyToSend}>Submit</button>
      </div>
    </form>);
}

const mapStateToProps = (state) => ({
  isCommentFormSending: state.isCommentFormSending,
});

const mapDispatchToProps = (dispatch) => ({
  sendFormData(comment, offerId) {
    dispatch(ActionGenerator.sendComment(true))
    dispatch(postComment(comment, offerId))
  }
});

export {CommentForm}
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
