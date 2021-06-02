import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

function App(props) {
  const {cardsNumber} = props;
  return (
    <MainPage cardsNumber={cardsNumber}/>
  );
}

App.propTypes = {
  cardsNumber: PropTypes.number.isRequired,
};

export default App;
