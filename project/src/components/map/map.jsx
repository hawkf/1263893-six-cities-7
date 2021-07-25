import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import {DEFAULT_MARKER_URL, CURRENT_MARKER_URL} from '../../const';
import {getActiveOfferId} from '../../store/offers-data/selectors';
import cardProp from '../card/card.prop';

export function Map({offers}) {
  const mapRef = useRef();
  const activeOfferId = useSelector(getActiveOfferId);
  const map = useMap(mapRef, offers[0].cityLocation);

  const defaultIcon = leaflet.icon({
    iconUrl: DEFAULT_MARKER_URL,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const currentIcon = leaflet.icon({
    iconUrl: CURRENT_MARKER_URL,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      markers.addTo(map);

      offers.forEach(({location: {latitude, longitude}, id}) => {
        leaflet
          .marker(
            {
              lat: latitude,
              lng: longitude,
            },
            {
              icon: activeOfferId === id ? currentIcon : defaultIcon,
            },
          )
          .addTo(markers);
      });
      map.flyTo(
        [offers[0].cityLocation.latitude, offers[0].cityLocation.longitude],
        offers[0].cityLocation.zoom,
      );
    }

    return () => {
      markers.clearLayers();

    };
  }, [map, offers, activeOfferId, currentIcon, defaultIcon]);

  return (
    <div id="map" ref={mapRef} style={{height: '100%'}}></div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(cardProp),
};

export default Map;
