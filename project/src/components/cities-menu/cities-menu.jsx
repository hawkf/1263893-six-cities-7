import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeCity} from '../../store/action';
import {CITIES} from '../../const';
import {getCity} from '../../store/offers-data/selectors';

function CitiesMenu() {
  const cityActive = useSelector(getCity);

  const dispatch = useDispatch();

  const changeActiveCity = (cityName) => {
    dispatch(changeCity(cityName));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((item) => (
            <li onClick={() => changeActiveCity(item)} key={item} className="locations__item">
              <a key={item} className={`locations__item-link tabs__item ${item === cityActive ? 'tabs__item--active' : ''}`} href="#">
                <span>{item}</span>
              </a>
            </li>))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesMenu;
