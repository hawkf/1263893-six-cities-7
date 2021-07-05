import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

function RatingInput({onRatingChangeHandle, value, isCommentFormSending}) {
  let unCheckInput = true;
  const inputStar = useRef();
  useEffect(() => {
    if (isCommentFormSending === false) {
      unCheckInput = !unCheckInput;
      inputStar.current.checked = false;
    }
  }, [isCommentFormSending]);

  return (
    <>
      <input ref={inputStar} onChange={() => onRatingChangeHandle(value)} disabled={isCommentFormSending ? true : ''} className="form__rating-input visually-hidden" name="rating" value={value} id={value > 1 ? `${value}-stars` : `${value}-star`} type="radio"/>
      <label htmlFor={value > 1 ? `${value}-stars` : `${value}-star`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

RatingInput.propTypes = {
  onRatingChangeHandle: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  isCommentFormSending: PropTypes.bool.isRequired,
};

export default RatingInput;
