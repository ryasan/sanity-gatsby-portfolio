import React, {useEffect, useState} from 'react';
import {compose, withProps} from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import {useForm, ValidationError} from '@formspree/react';

import * as styles from './contact.module.css';
import MarkerIcon from '../../static/images/marker.svg';
import Input, {TextAreaWithTheme} from '../input';
import {responsiveTitle1} from '../../components/typography.module.css';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const gMapsApiKey = 'AIzaSyANr_3txW2d9EoNsRJjlJ4hyenEcHLSYr8';
const formId = 'xrgrrelb';

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
  <GoogleMap defaultZoom={12} defaultCenter={{lat: 34.044727, lng: -118.249283}}>
    {props.markerIsShowing && (
      <Marker position={{lat: 34.044727, lng: -118.249283}} icon={MarkerIcon} />
    )}
  </GoogleMap>
));

function Modal({toggleModal, isDark, modalOpen}) {
  return (
    <div
      className={cn(styles.modal, isDark && styles.modalDarkMode, modalOpen && styles.isVisible)}>
      <p>Message sent!</p>
      <button onClick={toggleModal}>Close</button>
    </div>
  );
}

function Contact({isDark}) {
  const [state, handleSubmit] = useForm(formId);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    if (state.succeeded) toggleModal();
  }, [state.succeeded]);

  return (
    <div className={styles.root}>
      <div className={styles.leftColumn}>
        <GoogleMaps />
      </div>

      <form className={cn(styles.rightColumn, isDark && styles.darkMode)} onSubmit={handleSubmit}>
        <Modal isDark={isDark} toggleModal={toggleModal} modalOpen={modalOpen} />
        <h2 className={responsiveTitle1}>Contact Me</h2>

        <div className={styles.topRow}>
          <Input id='name' name='name' type='text' placeholder='Name' />
          <ValidationError prefix='Name' field='name' errors={state.errors} />
          <Input id='email' name='email' type='email' placeholder='Email' />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>

        <div className={styles.middleRow}>
          <Input id='subject' name='subject' type='text' placeholder='Subject' />
          <ValidationError prefix='Subject' field='subject' errors={state.errors} />
        </div>

        <div className={styles.bottomRow}>
          <TextAreaWithTheme
            id='message'
            name='message'
            type='text'
            placeholder='Message'
            rows={5}
          />
          <ValidationError prefix='Message' field='message' errors={state.errors} />
          <button
            type='submit'
            className={cn(styles.button, isDark && styles.buttonDarkMode)}
            disabled={state.submitting}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default withThemeInfo(Contact);
