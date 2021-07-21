import {NameSpace} from '../root-reducer';
import get from 'lodash/get';

export const getComments = (state) => get(state, `${NameSpace.FORM}.comments`, []);
export const getIsCommentFormSending = (state) => get(state, `${NameSpace.FORM}.isCommentFormSending`, true);
