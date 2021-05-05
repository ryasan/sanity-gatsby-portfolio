import React from 'react';
import {compose, withProps} from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

import * as styles from './contact.module.css';
import MarkerIcon from '../../static/images/marker.svg';
import {responsiveTitle1} from '../../components/typography.module.css';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

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
  <GoogleMap defaultZoom={12} defaultCenter={{lat: 34.079425, lng: -118.134693}}>
    {props.markerIsShowing && (
      <Marker position={{lat: 34.079425, lng: -118.134693}} icon={MarkerIcon} />
    )}
  </GoogleMap>
));

function Contact({isDark}) {
  return (
    <div className={styles.root}>
      <div className={styles.leftColumn}>
        <GoogleMaps />
      </div>
      <div className={cn(styles.rightColumn, isDark && styles.darkMode)}>
        <h2 className={responsiveTitle1}>Contact Me</h2>

        <div className={styles.topRow}>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
        </div>

        <div className={styles.middleRow}>
          <input type='text' placeholder='Subject' />
        </div>

        <div className={styles.bottomRow}>
          <textarea type='text' placeholder='Message' rows={5} />
          <button className={cn(styles.button, isDark && styles.buttonDarkMode)}>Send</button>
          <small>*not working yet</small>
        </div>
      </div>
    </div>
  );
}

export default withThemeInfo(Contact);
