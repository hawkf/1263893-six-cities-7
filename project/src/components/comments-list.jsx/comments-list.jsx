import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ReviewsItem} from '../offer-screen/reviews-item';
import {sortByDate} from '../../utils/offer';
import {fetchComments} from '../../store/api-actions';
import {getComments, getIsCommentFormSending} from '../../store/form-process/selectors';
import {getOpenedOffer} from '../../store/offers-data/selectors';
import swal from 'sweetalert';

function CommentsList() {
  const ON_FAIL_MESSAGE = 'Не удалосьзагрузить комментарии';

  const comments = useSelector(getComments);
  const isCommentFormSending = useSelector(getIsCommentFormSending);
  const openedOffer = useSelector(getOpenedOffer);

  const dispatch = useDispatch();

  const onFailHandle = () => {
    swal(ON_FAIL_MESSAGE);
  };

  const loadComments = (offerId, onFail) => {
    dispatch(fetchComments(offerId, onFail));
  };

  useEffect(() => {
    if (isCommentFormSending === false) {
      loadComments(openedOffer.id, onFailHandle);
    }
  });

  if (comments === null) {
    return null;
  }

  const resultComments = comments.slice().sort(sortByDate);

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
