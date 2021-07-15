import {formProcess}  from './form-process';
import {ActionType} from '../action';

describe('Reducer: form-procces', () =>{
  it('without additional parameters should return initial stat', () => {
    expect(formProcess(undefined, {}))
      .toEqual({comments: null, isCommentFormSending: false,});
  });

  it('should put comments to state', () => {
    const state = {
        comments: null,
        isCommentFormSending: false,
    };

    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: ['comment1', 'comment2'],
    }

    expect(formProcess(state, loadCommentsAction))
      .toEqual({comments: ['comment1', 'comment2'], isCommentFormSending: false});
  });

  it('should change isCommentFormSending field in state', () => {
    const state = {
      comments: null,
      isCommentFormSending: false,
    };

    const sendCommentAction = {
      type: ActionType.SEND_COMMENT,
      payload: true,
    }

    expect(formProcess(state, sendCommentAction))
      .toEqual({comments: null, isCommentFormSending: true});
  })
});
