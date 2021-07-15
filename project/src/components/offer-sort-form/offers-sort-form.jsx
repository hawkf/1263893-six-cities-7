import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SortType} from '../../const';
import {getSortType} from '../../store/offers-data/selectors';
import {setSortType} from '../../store/action';

function OffersSortForm() {
  const [isOptionListOpened, setIsOptionListOpened] = useState(false);
  const sortTypeKeys = Object.keys(SortType);

  const sortType = useSelector(getSortType);

  const dispatch = useDispatch();

  const onClickOptionHandle = (type) => {
    dispatch(setSortType(type));
  }

  const onClickTypeHandle = () => {
    setIsOptionListOpened(!isOptionListOpened)
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={onClickTypeHandle} className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOptionListOpened ? 'places__options--opened' : ''}`}>
        {sortTypeKeys.map((key) => (
          <li onClick={() => onClickOptionHandle(SortType[key])} className="places__option" tabIndex="0" key={SortType[key]}>{SortType[key]}</li>
        ))}
      </ul>
    </form>
  );
}

export default OffersSortForm;
