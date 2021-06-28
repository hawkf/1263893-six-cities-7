import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from './useMap';
import cardProp from '../card/card.prop';
import {DEFAULT_MARKER_URL, CURRENT_MARKER_URL} from '../../const';
import {getOffersByCity} from '../../utils/common';

export function Map({allOffers, activeOfferId, city}) {
  const offers = getOffersByCity(city, allOffers);
  const mapRef = useRef();
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
  }, [map, offers, activeOfferId]);

  return (
    <div className="cities__right-section">
      <section className="cities__map map">
        <div id="map" ref={mapRef} style={{height: '100%'}}></div>
      </section>
    </div>);
}

Map.propTypes = {
  allOffers: PropTypes.arrayOf(
    cardProp,
  ),
  activeOfferId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOfferId,
  allOffers: state.offers,
  city: state.city,
});

export default connect(mapStateToProps, null)(Map);
