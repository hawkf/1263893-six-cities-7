import {outLog, requireAuthorization, setUserEmail} from '../action';
import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';


const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: null,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) =>{
      state.authorizationStatus = action.payload;
    })
    .addCase(outLog, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(setUserEmail, (state, action) =>{
      state.userEmail = action.payload;
    });
});

export {user};
