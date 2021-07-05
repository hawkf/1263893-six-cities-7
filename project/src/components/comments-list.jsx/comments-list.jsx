import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ReviewsItem} from '../offer-screen/reviews-item';
import {sortByDate} from '../../utils/offer';
import {fetchComments} from '../../store/api-actions';
import OfferScreenProp from '../offer-screen/offer-screen.prop';
import CardProp from '../card/card.prop';

function CommentsList({comments, isCommentFormSending, openedOffer, loadComments}) {
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
  );
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  isCommentFormSending: state.isCommentFormSending,
  openedOffer: state.openedOffer,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(offerId) {
    dispatch(fetchComments(offerId));
  },
});

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(OfferScreenProp),
  isCommentFormSending: PropTypes.bool.isRequired,
  openedOffer: CardProp,
  loadComments: PropTypes.func.isRequired,

};

export {CommentsList};
export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
