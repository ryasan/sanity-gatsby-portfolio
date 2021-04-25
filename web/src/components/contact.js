import React from 'react';
import {compose, withProps} from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

import * as styles from './contact.module.css';
import googleMapsConfig from '../static/json/google-maps-config.json';
import MarkerIcon from '../static/images/marker.svg';

const gMapsApiKey = 'AIzaSyANr_3txW2d9EoNsRJjlJ4hyenEcHLSYr8';

const props = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${gMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{height: '100%'}} />,
  containerElement: <div style={{height: '100%'}} />,
  mapElement: <div style={{height: '100%'}} />,
};

const GoogleMaps = compose(
  withProps(props),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{lat: 34.079425, lng: -118.134693}}
    defaultOptions={{googleMapsConfig}}>
    {props.markerIsShowing && (
      <Marker position={{lat: 34.079425, lng: -118.134693}} icon={MarkerIcon} />
    )}
  </GoogleMap>
));

function Contact() {
  return (
    <div className={styles.root}>
      <div className={styles.leftColumn}>
        <GoogleMaps />
      </div>
      <div className={styles.rightColumn}>
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.topRow}>
          <input className={styles.inputBase} type='text' placeholder='Name' />
          <input className={styles.inputBase} type='text' placeholder='Email' />
        </div>
        <div className={styles.middleRow}>
          <input className={styles.inputBase} type='text' placeholder='Subject' />
        </div>
        <div className={styles.bottomRow}>
          <textarea className={styles.inputBase} type='text' placeholder='Message' rows={5} />
        </div>
      </div>
    </div>
  );
}

export default Contact;