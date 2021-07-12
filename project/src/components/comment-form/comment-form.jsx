import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postComment} from '../../store/api-actions';
import {ActionGenerator, sendComment} from '../../store/action';
import RatingInput from './rating-input';
import {getIsCommentFormSending} from '../../store/form-process/selectors';

function CommentForm({sendFormData, offerId, isCommentFormSending}) {
  const [rating, setRating] = useState(null);
  const [text, setText] = useState('');

  const MIN_TEXT_LENGTH = 50;
  const MAX_TEXT_LENGTH = 300;
  const RATING_VALUES = [1, 2, 3, 4, 5];
  const ON_FAIL_MESSAGE = 'Произошла ошибка во время отправки коментария';

  useEffect(() => {
    if (isCommentFormSending === false) {
      setRating(null);
      setText('');
    }
  }, [isCommentFormSending]);


  function onRatingChangeHandle(value) {
    setRating(value);
  }

  function handleTextChange(evt) {
    setText(evt.target.value);
  }

  function onFail() {
    throw new Error(ON_FAIL_MESSAGE);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    sendFormData({comment: text, rating: rating}, offerId, () => onFail());
  }

  const isFormReadyToSend = !isCommentFormSending &&
    rating !== null &&
    text.length >= MIN_TEXT_LENGTH &&
    text.length <= MAX_TEXT_LENGTH;


  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_VALUES.map((item) =>
          <RatingInput isCommentFormSending={isCommentFormSending} value={item} onRatingChangeHandle={onRatingChangeHandle} key={item}/>)}
      </div>
      <textarea value={text} onChange={handleTextChange} disabled={isCommentFormSending ? true : ''} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved">
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormReadyToSend}>Submit
        </button>
      </div>
    </form>);
}

const mapStateToProps = (state) => ({
  isCommentFormSending: getIsCommentFormSending(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendFormData(comment, offerId, onFail) {
    dispatch(sendComment(true));
    dispatch(postComment(comment, offerId, onFail));
  },
});

CommentForm.propTypes = {
  isCommentFormSending: PropTypes.bool.isRequired,
  sendFormData: PropTypes.func.isRequired,
  offerId: PropTypes.string.isRequired,
};

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
