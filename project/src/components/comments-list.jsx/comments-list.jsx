import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ReviewsItem} from '../offer-screen/reviews-item';
import {sortByDate} from '../../utils/offer';
import {fetchComments} from '../../store/api-actions';
import {getComments, getIsCommentFormSending} from '../../store/form-process/selectors';
import {getOpenedOffer} from '../../store/offers-data/selectors';

function CommentsList() {
  const comments = useSelector(getComments);
  const isCommentFormSending = useSelector(getIsCommentFormSending);
  const openedOffer = useSelector(getOpenedOffer);

  const dispatch = useDispatch();

  const loadComments = (offerId) => {
    dispatch(fetchComments(offerId));
  };


  const resultComments = comments.slice().sort(sortByDate);

  useEffect(() => {
    if (isCommentFormSending === false) {
      loadComments(openedOffer.id);
    }
  }, [isCommentFormSending]);

  if(comments === null) {
    return null;
  }

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {resultComments.map((comment) => (
          <ReviewsItem commentItem={comment} key={comment.id}/>))}
      </ul>
    </>
  );
}

export default CommentsList;
