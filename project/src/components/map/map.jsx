import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from './useMap';
import cardProp from '../card/card.prop';


export function Map({offers}) {
  const mapRef = useRef();
  const locations = offers.map((item) => item.location);
  const map = useMap(mapRef, offers[0].location);
  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      locations.forEach((location) => {
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: icon,
          })
          .addTo(map);
      });
    }
  }, [map, locations]);

  return (
    <div className="cities__right-section">
      <section className="cities__map map">
        <div id="map" ref={mapRef} style={{height: '100%'}}></div>
      </section>
    </div>);
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ),
};
