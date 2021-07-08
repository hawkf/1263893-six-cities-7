import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionGenerator, changeCity} from '../../store/action';
import {CITIES} from '../../const';
import {getCity} from '../../store/offers-data/selectors';

function CitiesMenu({cityActive, changeActiveCity}) {

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

CitiesMenu.propTypes = {
  cityActive: PropTypes.string.isRequired,
  changeActiveCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cityActive: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCity(cityName) {
    dispatch(changeCity(cityName));
  },
});

export {CitiesMenu};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesMenu);
