import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {comments} from './mocks/comments';

const CARDS_NUMBER = 5;

ReactDOM.render(
  <React.StrictMode>
    <App cardsNumber={CARDS_NUMBER} offers={offers} comments={comments}/>
  </React.StrictMode>,
  document.getElementById('root'));
