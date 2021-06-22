import React, {useState} from "react";
import cardProp from './card.prop';
import PropTypes from 'prop-types';
import Card from "./card";

export function CardList(props) {
  const {offers} = props;
  const [hoverOffer, setHoverOffer] = useState(offers[0]);


  return (<div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card history={history} onMouseOver={() => {setHoverOffer(offer)}} offer={offer} key={offer.id}/>)}
    </div>
  )
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(cardProp),
}
