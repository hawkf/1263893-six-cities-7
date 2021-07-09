import {combineReducers} from 'redux';
import {offersData} from './offers-data/offers-data';
import {user} from './user/user';
import {formProcess} from './form-process/form-process';

export const NameSpace = {
  DATA: 'DATA',
  FORM: 'FORM',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.FORM]: formProcess,
  [NameSpace.USER]: user,
});
