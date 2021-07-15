import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeFavorites} from '../../store/api-actions';
import cardProp from '../card/card.prop';
import Card from '../card/card';

function BookMarkButton(props) {
  const {offer, className} = props;
  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);

  const id = offer.id;

  const dispatch = useDispatch();

  const onClickHandle = () => {
    dispatch(changeFavorites(id, !isFavorite ? 1 : 0));
    setIsFavorite(!isFavorite)
  }

  return (
    <button onClick={onClickHandle} className={`${className} ${isFavorite ? `${className}--active` : ''} button`} type="button">
      {props.children}
    </button>
  );
}

BookMarkButton.propTypes = {
  offer: cardProp,
};

export default BookMarkButton;
