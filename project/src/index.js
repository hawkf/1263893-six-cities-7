import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {comments} from './mocks/comments';
import {reducer} from './store/reducer';
import {fetchOfferList, checkAuth} from './store/api-actions';
import {ActionGenerator} from "./store/action";
import {AuthorizationStatus} from "./const";

const api = createApi(
  () => store.dispatch(ActionGenerator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOfferList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} comments={comments}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
