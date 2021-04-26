import React from 'react';
import {compose, withProps} from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

import MarkerIcon from '../static/images/marker.svg';

const gMapsApiKey = 'AIzaSyANr_3txW2d9EoNsRJjlJ4hyenEcHLSYr8';

const props = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${gMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{height: '100%'}} />,
  containerElement: <div style={{height: '50vh'}} />,
  mapElement: <div style={{height: '100%'}} />,
};

const GoogleMaps = compose(
  withProps(props),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap defaultZoom={12} defaultCenter={{lat: 34.079425, lng: -118.134693}}>
    {props.markerIsShowing && (
      <Marker position={{lat: 34.079425, lng: -118.134693}} icon={MarkerIcon} />
    )}
  </GoogleMap>
));

export default GoogleMaps;
