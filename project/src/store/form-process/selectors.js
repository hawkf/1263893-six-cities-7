import {NameSpace} from '../root-reducer';

export const getComments = (state) => state[NameSpace.FORM].comments;
export const getIsCommentFormSending = (state) => state[NameSpace.FORM].isCommentFormSending;
