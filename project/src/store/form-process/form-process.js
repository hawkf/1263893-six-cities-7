import {loadComments, sendComment} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  comments: null,
  isCommentFormSending: false,
};

const formProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(sendComment, (state, action) => {
      state.isCommentFormSending = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export {formProcess};
