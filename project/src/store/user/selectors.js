import {NameSpace} from '../root-reducer';
import get from 'lodash/get';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state) => get(state, `${NameSpace.USER}.authorizationStatus`, AuthorizationStatus.UNKNOWN);
export const getUserEmail = (state) => get(state, `${NameSpace.USER}.userEmail`, null);
