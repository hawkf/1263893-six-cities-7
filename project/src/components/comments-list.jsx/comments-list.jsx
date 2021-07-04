import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {ReviewsItem} from '../offer-screen/reviews-item';
import {sortByDate} from '../../utils/offer';
import {fetchComments} from '../../store/api-actions';

function CommentsList({comments, isCommentFormSending, openedOffer, loadComments}) {
  const [, updateList] = useState(null);
  const resultComments = comments.sort(sortByDate);

  useEffect(() => {
    if (isCommentFormSending === false) {
      loadComments(openedOffer.id);
    }
  }, [isCommentFormSending]);

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
  )
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  isCommentFormSending: state.isCommentFormSending,
  openedOffer: state.openedOffer,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(offerId) {
    dispatch(fetchComments(offerId));
  }
})

export {CommentsList};
export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
