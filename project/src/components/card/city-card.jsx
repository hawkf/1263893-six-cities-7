import React from 'react';
import Card from './card';

function CityCard (props) {

  return (
    <Card classname={'cities__place-card'} isCityCard = {true} {...props}/>
  )
}
