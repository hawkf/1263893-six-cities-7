import React, {useRef} from 'react';
import leaflet from 'leflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const mapRef = useRef();

  return (<div className="cities__right-section">
      <section ref={mapRef} className="cities__map map"></section>
    </div>);
}
