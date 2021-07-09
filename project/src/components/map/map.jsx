import React, {useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from './useMap';
import {DEFAULT_MARKER_URL, CURRENT_MARKER_URL} from '../../const';
import {getOffersByCity} from '../../utils/common';
import {getActiveOfferId, getCity, getOffers} from '../../store/offers-data/selectors';

export function Map() {
  const activeOfferId = useSelector(getActiveOfferId);
  const allOffers = useSelector(getOffers);
  const city = useSelector(getCity);

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

export default Map;
